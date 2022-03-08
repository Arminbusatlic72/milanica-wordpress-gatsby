import React from "react"
import { graphql } from "gatsby"
import LayoutSrb from "../../components/layout/LayoutSrb"
import AnimatedOnlineLearningSectionSrb from "../../components/servicesPageAnimatedOnlineLearningSection/AnimatedOnlineLearningSectionSrb"
import PageContactFormSectionSrb from "../../components/pageContactFormSection/PageContactFormSectionSrb"
import Seo from "../../components/seo"

const animatedOnlineLearning = ({ data }) => {
  return (
    <LayoutSrb langData={data.allWpPage.nodes[0].translations}>
      <Seo title={data.allWpPage.nodes[0].title} />
      <AnimatedOnlineLearningSectionSrb
        animatedData={data.allWpPage.nodes[0]}
      />
      <PageContactFormSectionSrb />
    </LayoutSrb>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/animirano-online-ucenje/" } }) {
      nodes {
        title
        translations {
          link
          uri
          language {
            code
          }
        }
        servicesPageTableSrb {
          tableSrb
        }
        servicePageAnimatedLearningSectionSrb {
          buttonSrb {
            title
            url
          }
          titleSrb
          subtitleSrb
          diagramImageSrb {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          diagramDescriptionSrb
        }
      }
    }
  }
`
export default animatedOnlineLearning
