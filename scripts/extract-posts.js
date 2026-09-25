import fs from 'fs';
import path from 'path';

const sqlPath = path.join(process.cwd(), 'i2229562_wp2.sql');
const outputPath = path.join(process.cwd(), 'src/lib/old-posts.json');

try {
    console.log('Reading SQL file...');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');

    console.log('Finding wp_posts insert...');
    const insertStartMarker = "INSERT INTO `wp_posts`";
    const insertStartIndex = sqlContent.indexOf(insertStartMarker);

    if (insertStartIndex === -1) {
        throw new Error('Could not find INSERT INTO `wp_posts`');
    }

    // Find the start of the values
    const valuesStartIndex = sqlContent.indexOf('VALUES', insertStartIndex);
    if (valuesStartIndex === -1) {
        throw new Error('Could not find VALUES for wp_posts');
    }

    let currentIndex = valuesStartIndex + 6; // Skip 'VALUES'
    const posts = [];

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

            if (post_type === 'post' && post_status === 'publish') {
                posts.push({
                    id: values[0],
                    title: unquote(values[5]),
                    date: unquote(values[2]),
                    slug: unquote(values[11]),
                    content: unquote(values[4])
                });
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
