import React from 'react';
import { css } from '@emotion/core';
/* import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby'; */

import Layout from '../components/Layout';
import ReadLink from '../components/ReadLink';

//export const query = graphql

const PostTemplate = ({ pageContext }) => (
  <Layout>
    <h1>Post Title</h1>
    <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    <p css={css`font-size: .75rem;`}>
      Posted by (author)
    </p>
    <p>Post Body goes here</p>
    <ReadLink to='/'>back to all posts</ReadLink> 
  </Layout>
);

export default PostTemplate;