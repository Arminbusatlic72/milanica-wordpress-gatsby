import React from "react"
import "../../scss/index.scss"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = props => {
  let data = props.langData

  return (
    <>
      <Header langData={data} />

      <main>{props.children}</main>

      <Footer />
    </>
  )
}

export default Layout
