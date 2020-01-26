import React from 'react';
import LayoutStyles from '../components/styles/LayoutStyles';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { rhythm, scale } from '../utils/typography';

function Layout({ location, title, children }) {
  const data = useStaticQuery(graphql`
    query METADATA_QUERY {
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
  const { social } = data.site.siteMetadata;
  return (
    <LayoutStyles>
      <div className="container">
        <header className="main-header">
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(0.8),
              marginTop: 0,
              fontSize: '3rem',
            }}
          >
            <Link
              className="anchor-header"
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to="/"
            >
              {title}
            </Link>
          </h1>
          <div className="social-links">
            <ul>
              {social.map(({ name, url }) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </LayoutStyles>
  );
}

export default Layout;
