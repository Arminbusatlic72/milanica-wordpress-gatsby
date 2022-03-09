import React from "react"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Pagr not found" />
      <div className="global-wrapper">
        <div className="page-404">
          <h2>404 Page is not found</h2>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

// export const query = graphql`
//   {
//     allWpPage(filter: { uri: { eq: "/404
//     /" } }) {
//       edges {
//         node {
//           title
//           translations {
//             link
//             uri
//             language {
//               code
//             }
//           }
//         }
//       }
//     }
//   }
// `
