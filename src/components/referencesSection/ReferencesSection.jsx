import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ReferenceSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpReference {
        edges {
          node {
            id
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="references-page-section">
      <div className="global-wrapper">
        <h2 className="references-page-section__heading page-heading">
          References
        </h2>
        <div className="references-page-section__gallery-wrapper">
          {data.allWpReference.edges.map(edge => {
            const image = edge.node.featuredImage?.node
            return (
              <div key={edge.node.id}>
                <GatsbyImage
                  image={image?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={image?.altText}
                  quality={95}
                  layout="fullWidth"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  className="references-page-section__img"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default ReferenceSection
