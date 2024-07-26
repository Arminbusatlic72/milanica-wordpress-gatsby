import React from "react"
import "../../scss/index.scss"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import ConsentBanner from "../consentBanner/ConsentBanner"

const Layout = props => {
  let data = props.langData

  return (
    <>
      <Header langData={data} />

      <main>{props.children}</main>

      <Footer />
      <ConsentBanner />
    </>
  )
}

export default Layout
