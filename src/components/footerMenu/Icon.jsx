import React from "react"
import UniversalLink from "../universalLink/UniversalLink"

const Icon = props => {
  let item = props.menuData

  return (
    <li className="footer-menu__nav-list-item" key={item.id}>
      <UniversalLink to={item.url} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-${item.label} icon-white`} aria-hidden="true"></i>
      </UniversalLink>
    </li>
  )
}
export default Icon
