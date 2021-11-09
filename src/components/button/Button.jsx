import React from "react"
import { Link } from "gatsby"
import Arrow from "../../assets/btnArrow.svg"

const Button = props => {
  return (
    <Link className={`button ${props.className}`} to={props.link}>
      <div className="button__content-wrapper">
        {props.children}
        <Arrow className="button__arrow" />
      </div>
    </Link>
  )
}
export default Button
