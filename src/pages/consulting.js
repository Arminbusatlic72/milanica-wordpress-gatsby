import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import ServicesPageConsultingSection from "../components/servicesPageConsultingSection/ServicesPageConsultingSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"
import Seo from "../components/seo"
const servicesPage = ({ data }) => {
  return (
    <>
      <Layout langData={data.allWpPage.nodes[0].translations}>
        <Seo title={data.allWpPage.nodes[0].title} />
        <ServicesPageConsultingSection
          consultingData={data.allWpPage.nodes[0]}
        />

        <PageContactFormSection />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/consulting/" } }) {
      nodes {
        title
        translations {
          link
          uri
          language {
            code
          }
        }
        servicesPage {
          question {
            answer
            question
          }
          question1 {
            answer
            question
          }
          text
          pagetitle
          pagesubtitle
          aim1
          aim2
        }
      }
    }
  }
`

export default servicesPage
