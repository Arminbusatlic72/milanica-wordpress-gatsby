import React from "react"
import FooterMenu from "../footerMenu/FooterMenu"
import LogoFooter from "../logo/LogoFooter"
import Button from "../button/Button"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="global-wrapper">
        <LogoFooter />
        <FooterMenu />
        <Button className={`green`} link={`/`}>
          Start learning
        </Button>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
