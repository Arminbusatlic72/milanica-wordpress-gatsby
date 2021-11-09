import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Stars from "./Stars"

const Tabs = props => {
  let data = props.tabsData
  const [toggleState, setToggleState] = useState(data.edges[0].node.id)
  const toggleTab = id => setToggleState(id)

  return (
    <div className="tabs">
      <div className="tab-nav-list">
        {data.edges.map(edge => (
          <div
            key={edge.node.id}
            role="button"
            tabIndex="0"
            onClick={() => toggleTab(edge.node.id)}
            onKeyDown={() => toggleTab(edge.node.id)}
            className={
              toggleState === edge.node.id
                ? "tab-nav-list-item active-1"
                : "tab-nav-list-item"
            }
          >
            <GatsbyImage
              className="tab-img-rounded"
              image={
                edge.node.testimonialsContent.image.localFile.childImageSharp
                  .gatsbyImageData
              }
              quality={95}
              layout="fullWidth"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt={edge.node.testimonialsContent.image.altText}
              style={{ marginBottom: `1.45rem` }}
            />
            <div className="tab-heading-wrapper">
              <h3 className="tab-heading">
                {edge.node.testimonialsContent.name}
              </h3>
              <h6 className="tab-position">
                {edge.node.testimonialsContent.position}
              </h6>
            </div>
          </div>
        ))}
      </div>

      {data.edges.map(edge => (
        <div
          key={edge.node.id}
          className={
            toggleState === edge.node.id
              ? "tab-content active-content"
              : "tab-content"
          }
        >
          <h3 className="tab-content__heading">
            {edge.node.testimonialsContent.title}
          </h3>

          <Stars starsData={edge.node.testimonialsContent.stars} />
          <p className="tab-content__text">
            {edge.node.testimonialsContent.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Tabs
