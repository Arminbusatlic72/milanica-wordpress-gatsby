import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import AboutPageSection from "../components/aboutPageSection/AboutPageSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"

const aboutPage = ({ data }) => {
  return (
    <>
      <Layout>
        <AboutPageSection aboutData={data.allWpPage.edges[0].node} />
        <PageContactFormSection />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/about/" } }) {
      edges {
        node {
          aboutPageSection {
            aboutPageName
            aboutPagePosition
            aboutPageText
            aboutPageText1
            aboutPageText2
            aboutPageText3
            aboutPageImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
export default aboutPage
