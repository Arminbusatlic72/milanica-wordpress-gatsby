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
            let imgData = edge.node.featuredImage
              ? edge.node.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              : null
            let imgAlt = edge.node.featuredImage
              ? edge.node.featuredImage.alt
              : null

            return (
              <div className="column-50">
                <article>
                  <Link to={`/post-page/${edge.node.slug}`}>
                    {imgData !== null && (
                      <GatsbyImage
                        className="post-page-img"
                        image={imgData}
                        quality={95}
                        layout="fullWidth"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt={imgAlt}
                        style={{ marginBottom: `1.45rem` }}
                      />
                    )}

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
