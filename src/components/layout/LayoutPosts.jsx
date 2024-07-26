import React from "react"
import "../../scss/index.scss"
import HeaderPosts from "../header/HeaderPosts"
import Footer from "../footer/Footer"
import ConsentBanner from "../consentBanner/ConsentBanner"

const LayoutPosts = props => {
  return (
    <>
      <HeaderPosts />

      <main>{props.children}</main>

      <Footer />
      <ConsentBanner />
    </>
  )
}

export default LayoutPosts
