import React from "react"
import { graphql } from "gatsby"

import LayoutSrb from "../../components/layout/LayoutSrb"
import ContactPageSectionSrb from "../../components/contactPageSection/ContactPageSectionSrb"
import Seo from "../../components/seo"

const kontaktPage = ({ data }) => {
  return (
    <LayoutSrb langData={data.allWpPage.edges[0].node.translations}>
      <Seo title={data.allWpPage.edges[0].node.title} />
      <ContactPageSectionSrb
        title={"Kontaktirajte nas"}
        subtitle={" Zakažite sastanak"}
      />
    </LayoutSrb>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/kontakt/" } }) {
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
export default kontaktPage
