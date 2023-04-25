import React from "react"
import FooterMenu from "../footerMenu/FooterMenu"
import LogoFooterSrb from "../logo/LogoFooterSrb"
import Button from "../button/Button"
import UniversalLink from "../universalLink/UniversalLink"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="global-wrapper">
        <LogoFooterSrb />

        <FooterMenu />
        <Button
          className={`button-green`}
          link={` https://learningmakeover.thinkific.com/courses/stress-management `}
        >
          Saznajte više
        </Button>
        <div className={`main-footer__copyright`}>
          Learning Makeover | ©{new Date().getFullYear()}. <br />
          <UniversalLink
            style={{ color: "white" }}
            to="/sr/politika-privatnosti"
          >
            Politika privatnosti
          </UniversalLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
