import React from "react"
import MenuPosts from "../menu/MenuPosts"
import Logo from "../logo/Logo"

const Header = () => {
  return (
    <header className="global-header">
      <div className="global-wrapper">
        <div className="global-header__container">
          <Logo />
          <MenuPosts />
        </div>
      </div>
    </header>
  )
}

export default Header
