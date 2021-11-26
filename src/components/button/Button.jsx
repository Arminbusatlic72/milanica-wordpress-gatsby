import React from "react"
import UniversalLink from "../universalLink/UniversalLink"
import Arrow from "../../assets/btnArrow.svg"

const Button = props => {
  const { icon = true, className, link, children } = props
  return (
    <UniversalLink className={`button ${className}`} to={link}>
      <div className="button__content-wrapper">
        {children}
        {icon ? <Arrow className="button__arrow" /> : ""}
      </div>
    </UniversalLink>
  )
}
export default Button
