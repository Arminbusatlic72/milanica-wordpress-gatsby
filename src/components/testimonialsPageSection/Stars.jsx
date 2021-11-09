import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Stars = props => {
  let data = props.starsData

  let stars = []
  for (let i = 0; i < data; i++) {
    stars.push(
      <span className="star-wrapper" key={Math.random()}>
        <StaticImage src="../../images/star.png" alt="star" />
      </span>
    )
  }
  return <div className="stars-wrapper">{stars}</div>
}

export default Stars
