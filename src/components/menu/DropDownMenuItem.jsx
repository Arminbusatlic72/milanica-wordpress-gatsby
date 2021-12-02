import React, { useState } from "react"
import UniversalLink from "../universalLink/UniversalLink"
import { useMediaQuery } from "../helpers/UseMediaQuery"

const DropdownMenuItem = ({ parent, children }) => {
  const [show, setShow] = useState(false)

  const desktopBreakpoint = "980px"
  let isDesktop = useMediaQuery(`(min-width: ${desktopBreakpoint})`)

  const onClickHandlerParent = e => {
    e.preventDefault()
    if (!isDesktop) {
      show ? setShow(false) : setShow(true)
    }
  }

  const handleOnMouseEnter = () => {
    if (isDesktop) {
      setShow(true)
    }
  }
  return (
    <li
      className={`nav__menu-item is-parent`}
      onMouseEnter={() => handleOnMouseEnter()}
      onMouseLeave={() => setShow(false)}
      role="presentation"
      key={parent.id}
    >
      <UniversalLink
        className={
          show === true ? "nav__menu-link is-opened" : "nav__menu-link"
        }
        to="/services/"
        partiallyActive={true}
        activeClassName="is-active"
        onClick={onClickHandlerParent}
        title={parent.label}
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
              to={`/services${child.path}`}
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
