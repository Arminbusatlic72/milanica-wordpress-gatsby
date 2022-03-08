import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => {
  return (
    <Layout langData={data.allWpPage.edges[0].node.translations}>
      <Seo title={data.allWpPage.edges[0].node.title} />
      <div className="global-wrapper">
        <div className="page-404">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/404-not-found/" } }) {
      edges {
        node {
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
