import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import posts from '../../lib/old-posts.json';

export const PostDetail = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/" replace />;
    }

    // Function to process content and fix image paths if needed
    // Since we moved uploads to public/wp-content/uploads, standard WP paths like
    // src=".../wp-content/uploads/..." should work if they are relative.
    // If they are absolute (http://aryansachdev.com/...), we might need to replace the domain.
    const processContent = (content: string) => {
        return content.replace(/http:\/\/aryansachdev\.com\/wp-content/g, '/wp-content')
            .replace(/https:\/\/aryansachdev\.com\/wp-content/g, '/wp-content');
    };

    return (
        <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <header className="mb-8 pb-8 border-b border-gray-100">
                <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to posts</Link>
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
                dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
            />
        </article>
    );
};
