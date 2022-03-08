import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import AboutPageSection from "../components/aboutPageSection/AboutPageSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"
import Seo from "../components/seo"

const aboutPage = ({ data }) => {
  return (
    <>
      <Layout langData={data.allWpPage.edges[0].node.translations}>
        <Seo title={data.allWpPage.edges[0].node.title} />
        <AboutPageSection aboutData={data.allWpPage.edges[0].node} />
        <PageContactFormSection
          title={"Get in touch"}
          subtitle={"Schedule an Appointment"}
        />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/about/" } }) {
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
