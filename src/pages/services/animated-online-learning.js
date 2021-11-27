import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import AnimatedOnlineLearningSection from "../../components/servicesPageAnimatedOnlineLearningSection/AnimatedOnlineLearningSection"
import PageContactFormSection from "../../components/pageContactFormSection/PageContactFormSection"

const animatedOnlineLearning = ({ data }) => {
  return (
    <Layout>
      <AnimatedOnlineLearningSection animatedData={data.allWpPage.nodes[0]} />
      <PageContactFormSection />
    </Layout>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/animated-online-learning/" } }) {
      nodes {
        servicesPageTable {
          table
        }
        servicePageAnimatedLearningSection {
          button {
            title
            url
          }
          title
          subtitle
          diagramImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          diagramDescription
        }
      }
    }
  }
`
export default animatedOnlineLearning
