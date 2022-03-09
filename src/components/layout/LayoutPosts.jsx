import React from "react"
import "../../scss/index.scss"
import HeaderPosts from "../header/HeaderPosts"
import Footer from "../footer/Footer"

const LayoutPosts = props => {
  return (
    <>
      <HeaderPosts />

      <main>{props.children}</main>

      <Footer />
    </>
  )
}

export default LayoutPosts
