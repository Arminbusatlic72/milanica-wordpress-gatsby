import React from "react"
import Menu from "../menu/Menu"
// import Button from "../button/Button"
import Logo from "../logo/Logo"

const Header = () => {
  return (
    <header className="global-header">
      <div className="global-wrapper">
        <div className="global-header__container">
          <Logo />

          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
