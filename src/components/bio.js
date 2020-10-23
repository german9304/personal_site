import React from 'react';
import Image from 'gatsby-image';
import BioStyles from './styles/BioStyles';

import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            name
            url
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <BioStyles>
      <div className="bio">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `50%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div className="info">
          <p>
            My name is <strong>{author}</strong> and I'm a software engineer skilled in computer science, algorithms, web development, c/c++, javaScript, golang,
            java, python and rust. 
          </p>
        </div>
      </div>
    </BioStyles>
  );
}

export default Bio;
