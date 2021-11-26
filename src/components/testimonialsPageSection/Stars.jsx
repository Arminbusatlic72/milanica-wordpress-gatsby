import React from "react"
import Star from "../../assets/star.svg"

const Stars = props => {
  let data = props.starsData

  let stars = []
  for (let i = 0; i < data; i++) {
    stars.push(
      <span className="star-wrapper" key={Math.random()}>
        <Star />
      </span>
    )
  }
  return <div className="stars-wrapper">{stars}</div>
}

export default Stars
