import React from "react"
import UniversalLink from "../universalLink/UniversalLink"
import Arrow from "../../assets/btnArrow.svg"

const Button = ({ icon = true, className, link, children, ...props }) => {
  // const { icon = true, className, link, children, ...props } = props

  return (
    <UniversalLink className={`button ${className}`} to={link} {...props}>
      <div className="button__content-wrapper">
        {children}
        {icon ? <Arrow className="button__arrow" /> : ""}
      </div>
    </UniversalLink>
  )
}
export default Button
