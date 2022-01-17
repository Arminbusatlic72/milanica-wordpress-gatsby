import React from "react"
import Layout from "../components/layout/layout"
import ContactPageSection from "../components/contactPageSection/ContactPageSection"
import Seo from "../components/seo"

const contactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <ContactPageSection />
    </Layout>
  )
}

export default contactPage
