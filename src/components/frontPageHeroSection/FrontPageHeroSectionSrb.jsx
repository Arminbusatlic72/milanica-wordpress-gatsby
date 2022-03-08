import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../button/Button"

const FrontPageHeroSectionSrb = props => {
  let data = props.heroData

  const heroImage = {
    src:
      data.frontPageHeroSectionSrb.heroImage?.localFile.childImageSharp
        .gatsbyImageData,
    alt: data.frontPageHeroSectionSrb.heroImage?.alt || ``,
  }

  return (
    <section className="hero-section">
      <div className="global-wrapper">
        <div className="hero-section__wrapper">
          <div className="hero-section__heading-wrapper">
            <h1 className="hero-section__heading">
              {data.frontPageHeroSectionSrb.headingsrb}
              <span className="hero-section__heading--second">
                {data.frontPageHeroSectionSrb.headingSecondLineSrb}
              </span>
              <span className="hero-section__heading--third">
                {data.frontPageHeroSectionSrb.headingThirdLineSrb}
              </span>
            </h1>
          </div>
          <div className="hero-section__image-wrapper">
            {heroImage?.src && (
              <GatsbyImage
                className="img"
                image={heroImage.src}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={heroImage.alt}
              />
            )}

            <div className="hero-section__paragraph-wrapper">
              <p className="hero-section__paragraph">
                {data.frontPageHeroSectionSrb.textSrb}
              </p>
            </div>
          </div>
          <div className="hero-section__subheading-wrapper">
            <h2 className="hero-section__subheading">
              {data.frontPageHeroSectionSrb.subheadingSrb}
            </h2>
            <Button
              className=""
              link={data.frontPageHeroSectionSrb.herobuttonsrb.url}
            >
              {data.frontPageHeroSectionSrb.herobuttonsrb.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageHeroSectionSrb
