import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tabs from "./Tabs"

const TestimonialsPageSection = props => {
  const data = useStaticQuery(graphql`
    {
      allWpTestimonial {
        edges {
          node {
            testimonialsContent {
              name
              position
              stars
              text
              title
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  return (
    <section className="testimonials-page-section">
      <div className="global-wrapper">
        <h2 className="testimonials-page-section__heading">Testimonials</h2>
        <Tabs tabsData={data.allWpTestimonial} />
      </div>
    </section>
  )
}

export default TestimonialsPageSection
