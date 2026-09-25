import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../lib/old-posts.json';

export const PostList = () => {
    return (
        <div className="space-y-12">
            {posts.map((post) => (
                <article key={post.id} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <header className="mb-4">
                        <h2 className="text-2xl font-bold mb-2">
                            <Link to={`/${post.slug}`} className="hover:text-blue-600 transition-colors">
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
                        to={`/${post.slug}`}
                        className="inline-block text-blue-600 font-medium hover:underline"
                    >
                        Read more &rarr;
                    </Link>
                </article>
            ))}
        </div>
    );
};
