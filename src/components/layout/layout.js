import React from "react"
import "../../scss/index.scss"
import Header from "../header/Header"
import FooterSrb from "../footer/FooterSrb"

const Layout = props => {
  let data = props.langData

  return (
    <>
      <Header langData={data} />

      <main>{props.children}</main>

      <FooterSrb />
    </>
  )
}

export default Layout
