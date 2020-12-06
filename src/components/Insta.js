import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

const Insta = () => {
  return (
    <>
      <h2>Instagram posts from @_100daysofcode</h2>
      <div>{/** show posts here **/}</div>
      <a href={`https://www.instagram.com/_100DaysOfCode/`}>
        See more on Instagram &rarr;
      </a>
    </>
  )
};

export default Insta