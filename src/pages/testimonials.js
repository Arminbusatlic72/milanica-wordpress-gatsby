import React from "react"
import Layout from "../components/layout/layout"
import TestimonialsPageSection from "../components/testimonialsPageSection/TestimonialsPageSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"

const testimonialsPage = () => {
  return (
    <>
      <Layout>
        <TestimonialsPageSection />
        <PageContactFormSection />
      </Layout>
    </>
  )
}

export default testimonialsPage
