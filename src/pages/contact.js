import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import ContactPageSection from "../components/contactPageSection/ContactPageSection"
import Seo from "../components/seo"

const contactPage = ({ data }) => {
  return (
    <Layout langData={data.allWpPage.edges[0].node.translations}>
      <Seo title={data.allWpPage.edges[0].node.title} />
      <ContactPageSection
        title={"Get in touch"}
        subtitle={" Schedule an appointment"}
      />
    </Layout>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/contact/" } }) {
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
export default contactPage
