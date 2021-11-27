import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Stars = props => {
  let data = props.starsData

  let stars = []
  for (let i = 0; i < data; i++) {
    stars.push(
      <StaticImage
        key={Math.random()}
        className="star-wrapper"
        src="../../images/star1.png"
        alt="star"
      />
    )
  }
  return <div className="stars-wrapper">{stars}</div>
}

export default Stars
