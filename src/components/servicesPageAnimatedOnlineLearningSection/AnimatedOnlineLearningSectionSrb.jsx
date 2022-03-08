import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import TableSrb from "./table/TableSrb"
import Button from "../button/ButtonExternal"
const AnimatedOnlineLearningSectionSrb = props => {
  let data = props.animatedData
  return (
    <section className="animated-online-learning-section">
      <div className="global-wrapper">
        <div className="animated-online-learning-section__heading-wrapper">
          <h2 className="animated-online-learning-section__heading page-heading">
            {data.servicePageAnimatedLearningSectionSrb.titleSrb}
          </h2>
          <h5 className="animated-online-learning-section__subheading">
            {data.servicePageAnimatedLearningSectionSrb.subtitleSrb}
          </h5>
        </div>
        <GatsbyImage
          className="img"
          image={
            data.servicePageAnimatedLearningSectionSrb.diagramImageSrb.localFile
              .childImageSharp.gatsbyImageData
          }
          quality={95}
          layout="fullWidth"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={
            data.servicePageAnimatedLearningSectionSrb.diagramImageSrb.altText
          }
          style={{ marginBottom: `1.45rem` }}
        />
        <small className="animated-online-learning-section__img-description-text">
          {data.servicePageAnimatedLearningSectionSrb.diagramDescriptionSrb}
        </small>
        <TableSrb tableData={data.servicesPageTableSrb} />
        <Button
          link={data.servicePageAnimatedLearningSectionSrb.buttonSrb.url}
          className={``}
        >
          {data.servicePageAnimatedLearningSectionSrb.buttonSrb.title}
        </Button>
      </div>
    </section>
  )
}

export default AnimatedOnlineLearningSectionSrb
