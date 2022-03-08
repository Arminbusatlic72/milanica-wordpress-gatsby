import React from "react"
import "../../scss/index.scss"
import HeaderSrb from "../header/HeaderSrb"
import Footer from "../footer/Footer"

const Layout = props => {
  let data = props.langData

  return (
    <>
      <HeaderSrb langData={data} />

      <main>{props.children}</main>

      <Footer />
    </>
  )
}

export default Layout
