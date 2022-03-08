import React from "react"
import MenuSrb from "../menu/MenuSrb"
import LogoSrb from "../logo/LogoSrb"

const Header = props => {
  let data = props.langData
  return (
    <header className="global-header">
      <div className="global-wrapper">
        <div className="global-header__container">
          <LogoSrb />
          <MenuSrb langData={data} />
        </div>
      </div>
    </header>
  )
}

export default Header
