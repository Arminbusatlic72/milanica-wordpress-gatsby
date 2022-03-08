import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPageSectionSrb = props => {
  let data = props.aboutData
  const aboutPageImage = {
    src:
      data.aboutPageSectionSrb.aboutPageImage?.localFile.childImageSharp
        .gatsbyImageData,
    alt: data.aboutPageSectionSrb.aboutPageImage?.altText || ``,
  }
  return (
    <section className="about-page-section">
      <div className="global-wrapper">
        {aboutPageImage?.src && (
          <GatsbyImage
            className="img-rounded"
            image={aboutPageImage.src}
            quality={95}
            layout="fullWidth"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt={aboutPageImage.alt}
            style={{ marginBottom: `1.45rem` }}
          />
        )}
        <h2 className="about-page-section__heading">
          {data.aboutPageSectionSrb.aboutPageNameSrb}
        </h2>
        <p className="about-page-section__position">
          {data.aboutPageSectionSrb.aboutPagePositionSrb}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSectionSrb.aboutPageTextSrb}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSectionSrb.aboutPageText1Srb}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSectionSrb.aboutPageText2Srb}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSectionSrb.aboutPageText3Srb}
        </p>
      </div>
    </section>
  )
}

export default AboutPageSectionSrb
