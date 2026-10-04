import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import posts from '../../lib/old-posts.json';

export const PostDetail = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);
    const contentRef = useRef<HTMLDivElement>(null);

    // Some 2014-2015 images were hotlinked or never made it into the backup.
    // Hide any that fail to load instead of showing broken-image icons.
    // Open each post at the top, not wherever the list was scrolled to.
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const imgs = contentRef.current?.querySelectorAll('img') ?? [];
        imgs.forEach((img) => {
            const hide = () => { img.style.display = 'none'; };
            if (img.complete && img.naturalWidth === 0) hide();
            else img.addEventListener('error', hide);
        });
    }, [slug]);

    if (!post) {
        return <Navigate to="/old" replace />;
    }

    // Images that survived the WordPress backup live in public/old/uploads.
    const processContent = (content: string) => {
        return content.replace(/https?:\/\/aryansachdev\.com\/wp-content\/uploads/g, '/old/uploads');
    };

    return (
        <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <header className="mb-8 pb-8 border-b border-gray-100">
                <Link to="/old" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to posts</Link>
                <h1 className="text-3xl font-bold mb-2 text-gray-900">{post.title}</h1>
                <time className="text-gray-400 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </time>
            </header>

            <div
                className="prose prose-stone max-w-none prose-img:rounded-lg prose-a:text-blue-600"
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
            />
        </article>
    );
};
