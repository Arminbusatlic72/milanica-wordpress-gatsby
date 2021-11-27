import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
const FrontPageAboutFounderSection = props => {
  let data = props.aboutFounderData

  return (
    <section className="about-founder-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-40">
            <div className="about-founder-section__image-wrapper">
              <GatsbyImage
                className="img-rounded"
                image={
                  data.frontPageAboutFounderSection.founderimage.localFile
                    .childImageSharp.gatsbyImageData
                }
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={data.frontPageAboutFounderSection.founderimage.altText}
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </div>
          <div className="column-60">
            <div className="about-founder-section__text-wrapper">
              <h2 className="about-founder-section__heading">
                {data.frontPageAboutFounderSection.foundertitlefirstline}
                <span className="about-founder-section__heading-green">
                  {` ${data.frontPageAboutFounderSection.foundernameposition}`}
                </span>
                {` ${data.frontPageAboutFounderSection.foundertitlesecondline}`}
              </h2>
              <p className="about-founder-section__paragraph">
                {data.frontPageAboutFounderSection.foundertext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageAboutFounderSection
