import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const BlogLayout = () => {
    return (
        <div className="min-h-screen bg-[#f4f4f4] text-gray-800 font-serif">
            <header className="bg-white border-b border-gray-200 py-8 mb-8">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-4xl font-bold mb-2">
                        <Link to="/" className="hover:text-blue-600 transition-colors">
                            My Thoughts on Life and Minecraft
                        </Link>
                    </h1>
                    <p className="text-gray-500 italic">A blast from the past (2016-2019)</p>
                </div>
            </header>

            <main className="container mx-auto px-4 max-w-3xl pb-12">
                <Outlet />
            </main>

            <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Aryan Sachdev. Archived content.</p>
                    <p className="mt-2">
                        <a href="https://aryansach.dev" className="text-blue-600 hover:underline">
                            Visit my current portfolio &rarr;
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};
