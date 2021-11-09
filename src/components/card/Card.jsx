import React from "react"

const Card = props => {
  return (
    <div className="card">
      <div className="card__heading-wrapper">
        <h3 className="card__heading">{props.question}</h3>
      </div>
      <div
        className="card-content"
        contentEditable="true"
        dangerouslySetInnerHTML={{
          __html: props.answer,
        }}
      ></div>
    </div>
  )
}

export default Card
