import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import { usePosts } from '../hooks/use-posts'

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Welcome</h1>
      <p>Learn to build blazing fast apps and websites with React using Gatsby.</p>
      <Link to="/about/">Learn about me &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
