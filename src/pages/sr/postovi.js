import React from "react"
import { graphql } from "gatsby"
import LayoutSrb from "../../components/layout/LayoutSrb"
import PostPageSection from "../../components/postPageSection/PostPageSection"
import Seo from "../../components/seo"
const postPage = ({ data }) => {
  return (
    <LayoutSrb langData={data.allWpPage.edges[0].node.translations}>
      <Seo title={data.allWpPage.edges[0].node.title} />
      <PostPageSection />
    </LayoutSrb>
  )
}

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/postovi/" } }) {
      edges {
        node {
          uri
          title
          translations {
            link
            uri
            language {
              code
            }
          }
        }
      }
    }
  }
`
export default postPage
