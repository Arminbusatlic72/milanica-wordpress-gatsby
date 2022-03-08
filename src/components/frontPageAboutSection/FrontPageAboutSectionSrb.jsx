import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../button/Button"

const FrontPageAboutSectionSrb = props => {
  let data = props.aboutData
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = index => setToggleState(index)
  const aboutImage = {
    src:
      data.frontPageAboutSectionSrb.aboutimage?.localFile.childImageSharp
        .gatsbyImageData,
    alt: data.frontPageAboutSectionSrb.aboutimage?.altText || ``,
  }

  return (
    <section className="about-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-36">
            {aboutImage?.src && (
              <GatsbyImage
                className="img"
                image={aboutImage.src}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={aboutImage.alt}
                style={{ marginBottom: `1.45rem` }}
              />
            )}
          </div>
          <div className="column-64">
            <div className="about-section__heading-wrapper">
              <h2 className="about-section__heading">
                {data.frontPageAboutSectionSrb.titlesrb}
              </h2>
            </div>
            <div className="about-section__tabs-nav">
              <div
                role="button"
                tabIndex="0"
                onClick={() => toggleTab(1)}
                onKeyDown={() => toggleTab(1)}
                className={
                  toggleState === 1
                    ? "about-section__tabs-nav-item active"
                    : "about-section__tabs-nav-item"
                }
              >
                {data.frontPageAboutSectionSrb.accordionsrb.accordion1Titlesrb}
              </div>
              <div
                role="button"
                tabIndex="0"
                onClick={() => toggleTab(2)}
                onKeyDown={() => toggleTab(2)}
                className={
                  toggleState === 2
                    ? "about-section__tabs-nav-item active"
                    : "about-section__tabs-nav-item"
                }
              >
                {data.frontPageAboutSectionSrb.accordionsrb.accordion2Titlesrb}
              </div>
              <div
                role="button"
                tabIndex="0"
                onClick={() => toggleTab(3)}
                onKeyDown={() => toggleTab(3)}
                className={
                  toggleState === 3
                    ? "about-section__tabs-nav-item active"
                    : "about-section__tabs-nav-item"
                }
              >
                {data.frontPageAboutSectionSrb.accordionsrb.accordion3Titlesrb}
              </div>
            </div>
            <div className="about-section__tabs-content-wrap">
              <div
                className={
                  toggleState === 1
                    ? "about-section__tabs-content active-content"
                    : "about-section__tabs-content"
                }
                contentEditable="true"
                dangerouslySetInnerHTML={{
                  __html:
                    data.frontPageAboutSectionSrb.accordionsrb
                      .accordion1Textsrb,
                }}
              ></div>

              <div
                className={
                  toggleState === 2
                    ? "about-section__tabs-content active-content"
                    : "about-section__tabs-content"
                }
                contentEditable="true"
                dangerouslySetInnerHTML={{
                  __html:
                    data.frontPageAboutSectionSrb.accordionsrb
                      .accordion2Textsrb,
                }}
              ></div>
              <div
                className={
                  toggleState === 3
                    ? "about-section__tabs-content active-content"
                    : "about-section__tabs-content"
                }
                contentEditable="true"
                dangerouslySetInnerHTML={{
                  __html:
                    data.frontPageAboutSectionSrb.accordionsrb
                      .accordion3Textsrb,
                }}
              ></div>
            </div>

            <Button link={`${data.frontPageAboutSectionSrb.buttonsrb.url}`}>
              {data.frontPageAboutSectionSrb.buttonsrb.title}
            </Button>
            <div className="about-section__blur-background"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageAboutSectionSrb
