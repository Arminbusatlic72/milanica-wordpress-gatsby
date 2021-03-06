import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPageSection = props => {
  let data = props.aboutData
  const aboutPageImage = {
    src:
      data.aboutPageSection.aboutPageImage?.localFile.childImageSharp
        .gatsbyImageData,
    alt: data.aboutPageSection.aboutPageImage?.altText || ``,
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
          {data.aboutPageSection.aboutPageName}
        </h2>
        <p className="about-page-section__position">
          {data.aboutPageSection.aboutPagePosition}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSection.aboutPageText}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSection.aboutPageText1}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSection.aboutPageText2}
        </p>
        <p className="about-page-section__paragraph">
          {data.aboutPageSection.aboutPageText3}
        </p>
      </div>
    </section>
  )
}

export default AboutPageSection
