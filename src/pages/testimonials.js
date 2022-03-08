import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import TestimonialsPageSection from "../components/testimonialsPageSection/TestimonialsPageSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"
import Seo from "../components/seo"

const testimonialsPage = ({ data }) => {
  return (
    <>
      <Layout langData={data.allWpPage.edges[0].node.translations}>
        <Seo title={data.allWpPage.edges[0].node.title} />
        <TestimonialsPageSection />
        <PageContactFormSection />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/testimonials/" } }) {
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
