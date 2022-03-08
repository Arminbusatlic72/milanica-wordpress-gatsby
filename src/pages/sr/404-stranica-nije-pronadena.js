import React from "react"
import { graphql } from "gatsby"

import LayoutSrb from "../../components/layout/LayoutSrb"
import Seo from "../../components/seo"

const NotFoundPage = ({ data }) => {
  console.log(data)
  return (
    <LayoutSrb langData={data.allWpPage.edges[0].node.translations}>
      <Seo title={data.allWpPage.edges[0].node.title} />
      <div className="global-wrapper">
        <div className="page-404">
          <h1>404: Stranica nije nađena</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </LayoutSrb>
  )
}

export default NotFoundPage

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/404-stranica-nije-pronadena/" } }) {
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
