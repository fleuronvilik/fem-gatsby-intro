import React from 'react';
import styled from '@emotion/styled/base';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBg = styled(BackgroundImage)`
  /*background-image: url(/images/headway-unsplash.jpg);*/
  background-position: left bottom 20%;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 0;
  padding-bottom: 2rem;
  height: 100%;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(88,96,134,.8) 35%, rgba(226,208,172,.4) 93%);

  > * {
    max-width: 90vw;
    width: 550px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }

  h1, p {
    color: #fff;
  }

  a {
    margin: 0.5rem 0 0;
    padding: .5rem 1rem;
    background-color: #c77800;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "headway-unsplash.jpg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBg Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Coming Soon</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.</p>
        <div>
          <a href="#">More info &rarr;</a>
        </div>
      </TextBox>
    </ImageBg>
)};

export default Hero;