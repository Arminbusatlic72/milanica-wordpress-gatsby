import React from "react"
import { graphql } from "gatsby"
import LayoutSrb from "../../components/layout/LayoutSrb"
import TestimonialsPageSectionSrb from "../../components/testimonialsPageSection/TestimonialsPageSectionSrb"
import PageContactFormSectionSrb from "../../components/pageContactFormSection/PageContactFormSectionSrb"
import Seo from "../../components/seo"

const testimonialsPage = ({ data }) => {
  return (
    <>
      <LayoutSrb langData={data.allWpPage.edges[0].node.translations}>
        <Seo title={data.allWpPage.edges[0].node.title} />
        <TestimonialsPageSectionSrb />
        <PageContactFormSectionSrb />
      </LayoutSrb>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/svedocenja/" } }) {
      edges {
        node {
          title
          translations {
            link
            uri

            language {
              code
              id
            }
          }
          uri
        }
      }
    }
  }
`
export default testimonialsPage
