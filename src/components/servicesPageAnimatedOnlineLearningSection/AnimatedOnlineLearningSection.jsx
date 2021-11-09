import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Table from "./table/Table"
const AnimatedOnlineLearningSection = props => {
  let data = props.animatedData
  console.log(data)
  return (
    <section className="animated-online-learning-section">
      <div className="global-wrapper">
        <h2 className="animated-online-learning-section__heading">
          {data.servicePageAnimatedLearningSection.title}
        </h2>
        <h5 className="animated-online-learning-section__sub-heading">
          {data.servicePageAnimatedLearningSection.subtitle}
        </h5>
        <GatsbyImage
          className="img"
          image={
            data.servicePageAnimatedLearningSection.diagramImage.localFile
              .childImageSharp.gatsbyImageData
          }
          quality={95}
          layout="fullWidth"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={data.servicePageAnimatedLearningSection.diagramImage.altText}
          style={{ marginBottom: `1.45rem` }}
        />
        <small>
          {data.servicePageAnimatedLearningSection.diagramDescription}
        </small>
        <Table tableData={data.servicesPageTable} />
      </div>
    </section>
  )
}

export default AnimatedOnlineLearningSection
