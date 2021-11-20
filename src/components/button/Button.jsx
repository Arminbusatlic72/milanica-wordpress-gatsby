import React from "react"
import UniversalLink from "../universalLink/UniversalLink"
import Arrow from "../../assets/btnArrow.svg"

const Button = props => {
  return (
    <UniversalLink className={`button ${props.className}`} to={props.link}>
      <div className="button__content-wrapper">
        {props.children}
        <Arrow className="button__arrow" />
      </div>
    </UniversalLink>
  )
}
export default Button
