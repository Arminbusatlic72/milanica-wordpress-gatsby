import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import ServicesPageConsultingSection from "../../components/servicesPageConsultingSection/ServicesPageConsultingSection"
import PageContactFormSection from "../../components/pageContactFormSection/PageContactFormSection"
import Seo from "../../components/seo"
const servicesPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Seo title="Consulting" />
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
        }
      }
    }
  }
`

export default servicesPage
