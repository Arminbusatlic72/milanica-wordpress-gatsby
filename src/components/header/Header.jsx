import React from "react"
import Menu from "../menu/Menu"
import Logo from "../logo/Logo"

const Header = props => {
  let data = props.langData
  return (
    <header className="global-header">
      <div className="global-wrapper">
        <div className="global-header__container">
          <Logo />
          <Menu langData={data} />
        </div>
      </div>
    </header>
  )
}

export default Header
