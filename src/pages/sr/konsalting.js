import React from "react"
import { graphql } from "gatsby"
import LayoutSrb from "../../components/layout/LayoutSrb"
import ServicesPageConsultingSectionSrb from "../../components/servicesPageConsultingSection/ServicesPageConsultingSectionSrb"
import PageContactFormSectionSrb from "../../components/pageContactFormSection/PageContactFormSectionSrb"
import Seo from "../../components/seo"
const konsaltingPage = ({ data }) => {
  return (
    <>
      <LayoutSrb langData={data.allWpPage.nodes[0].translations}>
        <Seo title={data.allWpPage.nodes[0].title} />
        <ServicesPageConsultingSectionSrb
          consultingData={data.allWpPage.nodes[0]}
        />

        <PageContactFormSectionSrb />
      </LayoutSrb>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/konsalting/" } }) {
      nodes {
        title
        translations {
          link
          uri
          language {
            code
          }
        }
        servicesPageSrb {
          questionsrb {
            answer
            question
          }
          question1srb {
            answer
            question
          }
          textsrb
          pagetitlesrb
          pagesubtitlesrb
          aim1Srb
          aim2Srb
        }
      }
    }
  }
`

export default konsaltingPage
