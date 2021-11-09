import React from "react"

import "../../scss/index.scss"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <div className="global-wrapper"> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default Layout
