import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Table from "./table/Table"
import Button from "../button/ButtonExternal"
const AnimatedOnlineLearningSection = props => {
  let data = props.animatedData
  console.log(data)
  return (
    <section className="animated-online-learning-section">
      <div className="global-wrapper">
        <div className="animated-online-learning-section__heading-wrapper">
          <h2 className="animated-online-learning-section__heading page-heading">
            {data.servicePageAnimatedLearningSection.title}
          </h2>
          <h5 className="animated-online-learning-section__subheading">
            {data.servicePageAnimatedLearningSection.subtitle}
          </h5>
        </div>
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
        <small className="animated-online-learning-section__img-description-text">
          {data.servicePageAnimatedLearningSection.diagramDescription}
        </small>
        <Table tableData={data.servicesPageTable} />
        <Button
          link={data.servicePageAnimatedLearningSection.button.url}
          className={``}
        >
          {data.servicePageAnimatedLearningSection.button.title}
        </Button>
      </div>
    </section>
  )
}

export default AnimatedOnlineLearningSection
