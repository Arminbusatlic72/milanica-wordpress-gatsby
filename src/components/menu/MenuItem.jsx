import React from "react"
import UniversalLink from "../universalLink/UniversalLink"
const MenuItem = ({ menuItem }) => {
  return (
    <li className="nav__menu-item" key={menuItem.id}>
      <UniversalLink
        className="nav__menu-link"
        to={menuItem.path}
        activeClassName="is-active"
      >
        {menuItem.label}
      </UniversalLink>
    </li>
  )
}

export default MenuItem
