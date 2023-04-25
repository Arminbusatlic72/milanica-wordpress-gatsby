import React from "react"
import FooterMenu from "../footerMenu/FooterMenu"
import LogoFooter from "../logo/LogoFooter"
import Button from "../button/Button"
import UniversalLink from "../universalLink/UniversalLink"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="global-wrapper">
        <LogoFooter />

        <FooterMenu />
        <Button
          className={`button-green`}
          link={` https://learningmakeover.thinkific.com/courses/stress-management `}
        >
          Start learning
        </Button>
        <div className={`main-footer__copyright`}>
          Learning Makeover | ©{new Date().getFullYear()}.<br />
          <UniversalLink style={{ color: "white" }} to="/privacy-policy">
            Privacy Policy
          </UniversalLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
