import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPageSection = props => {
  let data = props.aboutData
  return (
    <section className="about-page-section">
      <div className="global-wrapper">
        <GatsbyImage
          className="img-rounded"
          image={
            data.aboutPageSection.aboutPageImage.localFile.childImageSharp
              .gatsbyImageData
          }
          quality={95}
          layout="fullWidth"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={data.aboutPageSection.aboutPageImage.altText}
          style={{ marginBottom: `1.45rem` }}
        />
        <h2 className="about-page-section__heading">
          {data.aboutPageSection.aboutPageName}
        </h2>
        <p className="about-page-section__position">
          {data.aboutPageSection.aboutPagePosition}
        </p>
        <p>{data.aboutPageSection.aboutPageText}</p>
        <p>{data.aboutPageSection.aboutPageText1}</p>
        <p>{data.aboutPageSection.aboutPageText2}</p>
        <p>{data.aboutPageSection.aboutPageText3}</p>
      </div>
    </section>
  )
}

export default AboutPageSection
