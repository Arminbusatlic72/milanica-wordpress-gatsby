import React from "react"
import { Link } from "gatsby"
import LogoFooter from "../../assets/logoFooter.svg"

const Logo = () => {
  return (
    <Link to={`/sr/`}>
      <LogoFooter />
    </Link>
  )
}

export default Logo
