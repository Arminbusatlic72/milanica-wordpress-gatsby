import React from "react"
import Layout from "../components/layout/layout"
import TestimonialsPageSection from "../components/testimonialsPageSection/TestimonialsPageSection"
import PageContactFormSection from "../components/pageContactFormSection/PageContactFormSection"
import Seo from "../components/seo"

const testimonialsPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Testimonials" />
        <TestimonialsPageSection />
        <PageContactFormSection />
      </Layout>
    </>
  )
}

export default testimonialsPage
