import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostPageSection = props => {
  let data = props.postData

  return (
    <section className="post-page-section">
      <div className="global-wrapper">
        <div className="row">
          {data.edges.map(edge => {
            return (
              <div className="column-50">
                <article>
                  <Link to={`/post-page/${edge.node.slug}`}>
                    <GatsbyImage
                      className="post-page-img"
                      image={
                        edge.node.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      quality={95}
                      layout="fullWidth"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt={edge.node.featuredImage.node.altText}
                      style={{ marginBottom: `1.45rem` }}
                    />

                    <h3>{edge.node.title}</h3>
                    <span className="post-page-section__post-date">
                      {edge.node.date}
                    </span>
                  </Link>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PostPageSection
