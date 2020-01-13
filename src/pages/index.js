import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import PostsStyles from "../components/styles/PostsStyles"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="blog-info">
        <section className="bio">
          <Bio />
        </section>
        <PostsStyles className="posts">
          <article>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <section key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </section>
              )
            })}
          </article>
        </PostsStyles>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
