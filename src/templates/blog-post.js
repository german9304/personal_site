import React from 'react';
import { Link, graphql } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const PostStyles = styled.div`
  /* padding: 1em; */
  h2 {
    padding: 0;
    margin: 0.5em 0;
  }
  div[data-language] pre {
    border-radius: 10px;
  }
  div[data-language] pre span {
    font-size: 0.85rem;
  }
  .gatsby-highlight-code-line {
    background-color: #022a4b;
    display: block;
    padding-right: 1em;
    padding-left: 1.25em;
    border-left: 0.25em solid #fff;
  }
`;

const NavStyles = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`;

function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PostStyles className="post">
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            className="date-post"
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </PostStyles>

      <NavStyles>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </NavStyles>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
