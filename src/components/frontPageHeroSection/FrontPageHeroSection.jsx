import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../button/Button"

const FrontPageHeroSection = props => {
  let data = props.heroData

  return (
    <section className="hero-section">
      <div className="global-wrapper">
        <div>
          <div className="hero-section__heading-wrapper">
            <h1 className="hero-section__heading">
              {data.frontPageHeroSection.heading}
              <span className="hero-section__heading--second">
                {data.frontPageHeroSection.headingSecondLine}
              </span>
              <span className="hero-section__heading--third">
                {data.frontPageHeroSection.headingThirdLine}
              </span>
            </h1>
          </div>
          <div className="hero-section__image-wrapper">
            <GatsbyImage
              className="img"
              image={
                data.frontPageHeroSection.heroImage.localFile.childImageSharp
                  .gatsbyImageData
              }
              quality={95}
              layout="fullWidth"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt={data.frontPageHeroSection.heroImage.altText}
              style={{ marginBottom: `1.45rem` }}
            />

            <div className="hero-section__paragraph-wrapper">
              <p className="hero-section__paragraph">
                {data.frontPageHeroSection.text}
              </p>
            </div>
          </div>
          <div className="hero-section__subheading-wrapper">
            <h2 className="hero-section__subheading">
              {data.frontPageHeroSection.subheading}
            </h2>
          </div>
          <Button link={`/${data.frontPageAboutSection.button.title}`}>
            {data.frontPageHeroSection.button.title}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FrontPageHeroSection
