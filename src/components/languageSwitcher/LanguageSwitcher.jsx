import React from "react"
import UniversalLink from "../universalLink/UniversalLink"

const LanguageSwitcher = props => {
  let data = props.langData

  return (
    <div className="nav__menu-item">
      <UniversalLink className="nav__menu-link" to={data[0].uri}>
        {data[0].language.code}
      </UniversalLink>
    </div>
  )
}

export default LanguageSwitcher
