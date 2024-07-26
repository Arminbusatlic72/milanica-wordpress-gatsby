import React from "react"
import "../../scss/index.scss"
import HeaderSrb from "../header/HeaderSrb"
import FooterSrb from "../footer/FooterSrb"
import ConsentBanner from "../consentBanner/ConsentBanner"

const Layout = props => {
  let data = props.langData

  return (
    <>
      <HeaderSrb langData={data} />

      <main>{props.children}</main>

      <FooterSrb />
      <ConsentBanner />
    </>
  )
}

export default Layout
