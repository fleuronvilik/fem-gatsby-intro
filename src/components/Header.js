import React from 'react';
//import { styled } from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = ({ children, fontWeight, to }) => (
  <Link to={to} css={css`
    color: #222;
    font-size: 1rem;
    font-weight: ${fontWeight || "normal"};
    line-height: 1;
    padding: 0.25rem 0;
    text-decoration: none;
    
    &.current-page {
      border-bottom: 2px solid #222;
    }

    &:last-child {
      margin-left: 0.5rem;
    }
  `}>{children}</Link>
);

const Header = () => (
  <header css={css`
    background-color: #eee;
    border-bottom: 1px solid #ddd;
  `}>
    <div css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 0.25rem 0;
      max-width: 90vw;
      width: 550px;
    `}>
      <NavLink to="/" fontWeight="bold">Gatsby Intro</NavLink>
      <nav css={css`margin: 0;`}>
        <NavLink to="/" activeClassName="current-page">Home</NavLink>
        <NavLink to="/about/" activeClassName="current-page">About</NavLink>
      </nav>
    </div>
  </header>
)

export default Header;