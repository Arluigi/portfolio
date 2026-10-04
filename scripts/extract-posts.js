import fs from 'fs';
import path from 'path';

// Usage: WP_SQL=<path to dump> HIDDEN_POSTS_FILE=<path to list> node scripts/extract-posts.js (both kept outside this repo)
const sqlPath = process.env.WP_SQL || path.join(process.cwd(), 'i2229562_wp2.sql');
const outputPath = path.join(process.cwd(), 'src/lib/old-posts.json');

try {
    console.log('Reading SQL file...');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');

    console.log('Finding wp_posts insert...');
    const insertStartMarker = "INSERT INTO `wp_posts`";
    // Published posts kept off the site: one slug per line, in a file outside this public repo.
    if (!process.env.HIDDEN_POSTS_FILE || !fs.existsSync(process.env.HIDDEN_POSTS_FILE)) {
        throw new Error('Set HIDDEN_POSTS_FILE to the hidden-posts list (kept outside this repo). Refusing to run without it.');
    }
    const HIDDEN_SLUGS = new Set(fs.readFileSync(process.env.HIDDEN_POSTS_FILE, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean));
    const posts = [];
    let insertStartIndex = sqlContent.indexOf(insertStartMarker);

    if (insertStartIndex === -1) {
        throw new Error('Could not find INSERT INTO `wp_posts`');
    }

    // mysqldump splits big tables across many INSERT statements (this dump has 14).
    // Read every one, not just the first.
    for (; insertStartIndex !== -1; insertStartIndex = sqlContent.indexOf(insertStartMarker, insertStartIndex + 1)) {
    // Find the start of the values
    const valuesStartIndex = sqlContent.indexOf('VALUES', insertStartIndex);
    if (valuesStartIndex === -1) {
        throw new Error('Could not find VALUES for wp_posts');
    }

    let currentIndex = valuesStartIndex + 6; // Skip 'VALUES'

    // Parsing state machine
    while (currentIndex < sqlContent.length) {
        // Skip whitespace/newlines
        while (/\s/.test(sqlContent[currentIndex])) currentIndex++;

        if (sqlContent[currentIndex] === ';') break; // End of statement
        if (sqlContent[currentIndex] !== '(') {
            // Might be a comma between tuples
            if (sqlContent[currentIndex] === ',') {
                currentIndex++;
                continue;
            }
            // Unexpected char, skip or break
            currentIndex++;
            continue;
        }

        // Inside a tuple (...)
        currentIndex++; // Skip '('
        const values = [];
        let currentValue = '';
        let inQuote = false;
        let escape = false;

        while (currentIndex < sqlContent.length) {
            const char = sqlContent[currentIndex];

            if (escape) {
                currentValue += char;
                escape = false;
            } else if (char === '\\') {
                currentValue += char;
                escape = true;
            } else if (char === "'" && !escape) {
                inQuote = !inQuote;
                currentValue += char;
            } else if (char === ',' && !inQuote) {
                values.push(currentValue.trim());
                currentValue = '';
            } else if (char === ')' && !inQuote) {
                values.push(currentValue.trim());
                currentIndex++; // Skip ')'
                break; // End of tuple
            } else {
                currentValue += char;
            }
            currentIndex++;
        }

        // Process the tuple
        // Indices:
        // 0: ID
        // 2: post_date
        // 4: post_content
        // 5: post_title
        // 7: post_status
        // 11: post_name (slug)
        // 20: post_type

        const unquote = (str) => {
            if (!str) return '';
            if (str.startsWith("'") && str.endsWith("'")) {
                // Remove surrounding quotes
                let s = str.slice(1, -1);
                // Handle SQL escapes: \' -> ', \" -> ", \\ -> \
                s = s.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                // Handle newlines that might be escaped as \r\n or just literal newlines
                s = s.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n');
                return s;
            }
            return str;
        };

        if (values.length > 20) {
            const post_type = unquote(values[20]);
            const post_status = unquote(values[7]);

            if (post_type === 'post' && post_status === 'publish' && !HIDDEN_SLUGS.has(unquote(values[11]))) {
                posts.push({
                    id: values[0],
                    title: unquote(values[5]),
                    date: unquote(values[2]),
                    slug: unquote(values[11]),
                    // Strip images that point at private mail attachments (they never load publicly).
                    content: unquote(values[4]).replace(/<img[^>]*mail\.google\.com[^>]*>/g, '')
                });
            }
        }
    }

    }

    console.log(`Found ${posts.length} published posts.`);

    // Sort by date desc
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
    console.log(`Saved to ${outputPath}`);

} catch (err) {
    console.error('Error:', err);
}
