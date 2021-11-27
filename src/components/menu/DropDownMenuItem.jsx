import React, { useState } from "react"
import UniversalLink from "../universalLink/UniversalLink"
const DropdownMenuItem = ({ parent, children }) => {
  const [show, setShow] = useState(false)
  const onClickHandlerParent = e => {
    e.preventDefault()
  }
  return (
    <li
      className={`nav__menu-item`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      role="presentation"
      key={parent.id}
    >
      {/* <span className={parentActive ? 'nav__menu-link is-active' : ''}>
        {parent.label}
      </span> */}
      <UniversalLink
        className="nav__menu-link"
        to="/services/"
        partiallyActive={true}
        activeClassName="is-active"
        onClick={onClickHandlerParent}
      >
        {parent.label}
      </UniversalLink>

      <ul
        className={show === true ? "sub-menu dropdown-menu-show" : "sub-menu"}
      >
        {children.map(child => (
          <li key={child.id} className="sub-menu__item">
            <UniversalLink
              className="nav__menu-link"
              to={`${parent.url.slice(0, -1)}${child.path}`}
              activeClassName="is-active"
            >
              {child.label}
            </UniversalLink>
          </li>
        ))}
      </ul>
    </li>
  )
}
export default DropdownMenuItem
