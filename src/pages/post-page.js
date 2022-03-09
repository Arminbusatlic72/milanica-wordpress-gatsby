import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PostPageSection from "../components/postPageSection/PostPageSection"
import Seo from "../components/seo"
const postPage = ({ data }) => {
  return (
    <Layout langData={data.allWpPage.edges[0].node.translations}>
      <Seo title={data.allWpPage.edges[0].node.title} />
      <PostPageSection />
    </Layout>
  )
}

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/post-page/" } }) {
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
