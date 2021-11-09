import React from "react"
import Arrow from "../../assets/btnArrow.svg"

const ButtonExternal = props => {
  return (
    <a
      className={`button ${props.className}`}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="button__content-wrapper">
        {props.children}
        <Arrow className="button__arrow" />
      </div>
    </a>
  )
}
export default ButtonExternal
