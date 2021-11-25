import React, { useState } from "react"
import UniversalLink from "../universalLink/UniversalLink"
const DropdownMenuItem = ({ parent, children }) => {
  const [show, setShow] = useState(false)

  return (
    <li
      className={`nav__menu-item`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      role="presentation"
      key={parent.id}
    >
      <span className="nav__menu-link">{parent.label}</span>

      <ul
        className={show === true ? "sub-menu dropdown-menu-show" : "sub-menu"}
      >
        {children.map(child => (
          <li key={child.id} className="sub-menu__item">
            <UniversalLink className="nav__menu-link" to={child.path}>
              {child.label}
            </UniversalLink>
          </li>
        ))}
      </ul>
    </li>
  )
}
export default DropdownMenuItem
