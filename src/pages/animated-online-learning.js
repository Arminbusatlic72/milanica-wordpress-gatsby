import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import AnimatedOnlineLearningSection from "../components/servicesPageAnimatedOnlineLearningSection/AnimatedOnlineLearningSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"
import Seo from "../components/seo"

const animatedOnlineLearning = ({ data }) => {
  console.log(data)
  return (
    <Layout langData={data.allWpPage.nodes[0].translations}>
      <Seo title={data.allWpPage.nodes[0].title} />
      <AnimatedOnlineLearningSection animatedData={data.allWpPage.nodes[0]} />
      <PageContactFormSection />
    </Layout>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/animated-online-learning/" } }) {
      nodes {
        title
        translations {
          link
          uri
          language {
            code
          }
        }
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
