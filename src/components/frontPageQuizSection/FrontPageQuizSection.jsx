import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../button/Button"

const FrontPageQuizSection = props => {
  // Ensure quizData is defined and has the expected structure
  const data = props.quizData || {}
  const quizSection = data.frontPageQuizSection || {}

  // Check if the required data is present
  if (!quizSection.quizSectionTitle) {
    return null // Return null if the section is empty
  }

  const quizImage = {
    src:
      quizSection.quizSectionImage?.localFile?.childImageSharp
        ?.gatsbyImageData || null,
    alt: quizSection.quizSectionImage?.altText || ``,
  }

  return (
    <section className="quiz-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-50">
            <div className="quiz-section__image-wrapper">
              {/* Render GatsbyImage only if src is available */}
              {quizImage.src ? (
                <GatsbyImage
                  className="img"
                  image={quizImage.src}
                  quality={95}
                  layout="fullWidth"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt={quizImage.alt}
                  style={{ marginBottom: `1.45rem` }}
                />
              ) : null}
            </div>
          </div>
          <div className="column-50">
            <h2 className="quiz-section__heading">
              {quizSection.quizSectionTitle}
            </h2>
            <p>{quizSection.quizSectionParagraph}</p>
            <ul className="quiz-section__list">
              {quizSection.quizSectionText1Srb && (
                <li className="quiz-section__list-item">
                  {quizSection.quizSectionText1}
                </li>
              )}
              {quizSection.quizSectionText2 && (
                <li className="quiz-section__list-item">
                  {quizSection.quizSectionText2}
                </li>
              )}
              {quizSection.quizSectionText3Srb && (
                <li className="quiz-section__list-item">
                  {quizSection.quizSectionText3}
                </li>
              )}
            </ul>
            {quizSection.quizSectionButton && (
              <Button link={quizSection.quizSectionButton?.url || "#"}>
                {quizSection.quizSectionButton?.title}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageQuizSection
