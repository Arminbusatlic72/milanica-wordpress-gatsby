import React from "react"
import UniversalLink from "../universalLink/UniversalLink"

const LanguageSwitcher = props => {
  let data = props.langData
  if (data == null) {
    return null
  }
  return (
    <div className="nav__menu-item language-switch">
      <UniversalLink className="nav__menu-link" to={data[0].uri}>
        {data[0].language.code}
      </UniversalLink>
    </div>
  )
}

export default LanguageSwitcher
