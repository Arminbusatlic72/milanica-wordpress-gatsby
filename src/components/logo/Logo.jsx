import React from "react"
import { Link } from "gatsby"
import LogoHeader from "../../assets/logoHeader.svg"

const Logo = () => {
  return (
    <Link to={`/`}>
      <LogoHeader className="logo" />
    </Link>
  )
}

export default Logo
