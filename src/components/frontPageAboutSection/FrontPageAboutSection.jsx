import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Button from "../button/Button"

const FrontPageAboutSection = props => {
  let data = props.aboutData
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = index => setToggleState(index)
  return (
    <section className="about-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-36">
            <GatsbyImage
              className="img"
              image={
                data.frontPageAboutSection.aboutimage.localFile.childImageSharp
                  .gatsbyImageData
              }
              quality={95}
              layout="fullWidth"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt={data.frontPageAboutSection.aboutimage.altText}
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
          <div className="column-64">
            <div className="about-section__heading-wrapper">
              <h2 className="about-section__heading">
                {data.frontPageAboutSection.title}
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
                {data.frontPageAboutSection.accordion.accordion1Title}
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
                {data.frontPageAboutSection.accordion.accordion2Title}
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
                {data.frontPageAboutSection.accordion.accordion3Title}
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
                  __html: data.frontPageAboutSection.accordion.accordion1Text,
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
                  __html: data.frontPageAboutSection.accordion.accordion2Text,
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
                  __html: data.frontPageAboutSection.accordion.accordion3Text,
                }}
              ></div>
            </div>

            <Button link={`${data.frontPageAboutSection.button.url}`}>
              {data.frontPageAboutSection.button.title}
            </Button>
            <div className="about-section__blur-background"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageAboutSection
