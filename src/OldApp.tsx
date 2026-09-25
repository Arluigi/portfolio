import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BlogLayout } from './components/old-site/BlogLayout';
import { PostList } from './components/old-site/PostList';
import { PostDetail } from './components/old-site/PostDetail';

export const OldApp = () => {
    return (
        <Routes>
            <Route path="/" element={<BlogLayout />}>
                <Route index element={<PostList />} />
                <Route path=":slug" element={<PostDetail />} />
            </Route>
        </Routes>
    );
};
