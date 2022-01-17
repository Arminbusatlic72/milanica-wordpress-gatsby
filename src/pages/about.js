import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import AboutPageSection from "../components/aboutPageSection/AboutPageSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"
import Seo from "../components/seo"

const aboutPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Seo title="About" />
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
                  gatsbyImageData(placeholder: BLURRED)
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
