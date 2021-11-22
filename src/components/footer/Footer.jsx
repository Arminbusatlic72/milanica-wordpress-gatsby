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
        <Button className={`button-green`} link={`/`}>
          Start learning
        </Button>
        <div className={`main-footer__copyright`}>
          Learning Makeover | ©{new Date().getFullYear()}. 
        </div>
      </div>
    </footer>
  )
}

export default Footer
