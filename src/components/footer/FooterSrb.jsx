import React from "react"
import FooterMenu from "../footerMenu/FooterMenu"
import LogoFooterSrb from "../logo/LogoFooterSrb"
import Button from "../button/Button"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="global-wrapper">
        <LogoFooterSrb />

        <FooterMenu />
        <Button
          className={`button-green`}
          link={` https://www.udemy.com/course/stress-management-animated-course/?referralCode=5998E7B9187E217AD11B `}
        >
          Saznajte više
        </Button>
        <div className={`main-footer__copyright`}>
          Learning Makeover | ©{new Date().getFullYear()}.
        </div>
      </div>
    </footer>
  )
}

export default Footer
