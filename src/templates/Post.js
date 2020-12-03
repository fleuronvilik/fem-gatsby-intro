import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ReadLink from '../components/ReadLink';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx:post }}) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p css={css`font-size: .75rem;`}>
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <p>Post Body goes here</p>
    <ReadLink to='/'>back to all posts &larr;</ReadLink> 
  </Layout>
);

export default PostTemplate;