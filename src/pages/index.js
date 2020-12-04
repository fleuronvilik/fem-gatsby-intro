import React from 'react';

import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';
import { usePosts } from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
