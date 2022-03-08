import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TabsSrb from "./TabsSrb"

const TestimonialsPageSectionSrb = props => {
  const data = useStaticQuery(graphql`
    {
      allWpTestimonial {
        edges {
          node {
            testimonialsContentSrb {
              nameSrb
              positionSrb
              stars
              textSrb
              titleSrb
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
        <h2 className="testimonials-page-section__heading page-heading">
          ŠTA KAŽU KLIJENTI I KOLEGE
        </h2>
        <TabsSrb tabsData={data.allWpTestimonial} />
      </div>
    </section>
  )
}

export default TestimonialsPageSectionSrb
