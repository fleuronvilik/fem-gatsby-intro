import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1>Welcome</h1>
    <p>Learn to build blazing fast apps and websites with React using Gatsby.</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
