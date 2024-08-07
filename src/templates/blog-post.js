import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"
import Bio from "../components/bio"
import LayoutPosts from "../components/layout/LayoutPosts"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  useEffect(() => {
    const iframes = document.querySelectorAll(".blog-post iframe")
    iframes.forEach(iframe => {
      const wrapper = document.createElement("div")
      wrapper.className = "responsive-video"
      iframe.parentNode.insertBefore(wrapper, iframe)
      wrapper.appendChild(iframe)
    })
  }, [])
  return (
    <LayoutPosts>
      <Seo title={post.title} description={post.excerpt} />
      <div className="global-wrapper">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <div className="blog-post__image-wrapper">
              {featuredImage?.data && (
                <GatsbyImage
                  image={featuredImage.data}
                  alt={featuredImage.alt}
                  style={{ marginBottom: 50 }}
                />
              )}
            </div>
            <div className="blog-post__heading-wrapper">
              <h1 itemProp="headline">{parse(post.title)}</h1>

              <p>{post.date}</p>
            </div>
          </header>
          <hr />

          {!!post.content && (
            <section itemProp="articleBody">{parse(post.content)}</section>
          )}

          <hr />

          <footer>
            <Bio />
          </footer>
        </article>

        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/post-page/${previous.slug}`} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={`/post-page/${next.slug}`} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </LayoutPosts>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      slug
      title
      translations {
        link
        uri
        language {
          code
        }
      }
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      slug
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      slug
      uri
      title
    }
  }
`
