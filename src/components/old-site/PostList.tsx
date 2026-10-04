import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../lib/old-posts.json';

const SCROLL_KEY = 'old-blog-list-anchor';

// Remember which post the reader opened and where it sat on screen, so going
// back (browser back or "Back to posts") returns them to the same spot.
// Anchoring to the post survives layout shifts from fonts loading.
const rememberPosition = (slug: string) => (e: React.MouseEvent<HTMLElement>) => {
    const article = e.currentTarget.closest('article');
    const top = article ? article.getBoundingClientRect().top : 0;
    try { sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ slug, top })); } catch { /* storage unavailable */ }
};

const restorePosition = () => {
    let saved: { slug: string; top: number } | null = null;
    try { saved = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || 'null'); } catch { /* storage unavailable */ }
    const article = saved && document.querySelector<HTMLElement>(`article[data-slug="${saved.slug}"]`);
    if (!saved || !article) return;
    window.scrollTo(0, article.getBoundingClientRect().top + window.scrollY - saved.top);
};

export const PostList = () => {
    useLayoutEffect(() => {
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        restorePosition();
        // Re-apply once web fonts finish loading, since they change text heights.
        document.fonts?.ready.then(restorePosition);
        // Hand scroll restoration back to the browser for the rest of the site.
        return () => { if ('scrollRestoration' in history) history.scrollRestoration = 'auto'; };
    }, []);

    return (
        <div className="space-y-12">
            {posts.map((post) => (
                <article key={post.id} data-slug={post.slug} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <header className="mb-4">
                        <h2 className="text-2xl font-bold mb-2">
                            <Link to={`/old/${post.slug}`} onClick={rememberPosition(post.slug)} className="hover:text-blue-600 transition-colors">
                                {post.title}
                            </Link>
                        </h2>
                        <time className="text-gray-400 text-sm">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </header>

                    <div className="prose prose-stone max-w-none mb-4 line-clamp-3 text-gray-600">
                        {/* Strip HTML tags for excerpt */}
                        {post.content.replace(/<[^>]*>?/gm, '').substring(0, 200)}...
                    </div>

                    <Link
                        to={`/old/${post.slug}`}
                        onClick={rememberPosition(post.slug)}
                        className="inline-block text-blue-600 font-medium hover:underline"
                    >
                        Read more &rarr;
                    </Link>
                </article>
            ))}
        </div>
    );
};
