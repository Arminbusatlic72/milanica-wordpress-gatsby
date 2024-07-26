import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "../button/Button"

const FrontPageQuizSectionSrb = props => {
  let data = props.quizData

  const quizImage = {
    src:
      data.frontPageQuizSectionSrb.quizSectionImageSrb?.localFile
        .childImageSharp.gatsbyImageData,
    alt: data.frontPageQuizSectionSrb.quizSectionImageSrb?.altText || ``,
  }

  return (
    <section className="quiz-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-50">
            <div className="quiz-section__image-wrapper">
              <GatsbyImage
                className="img"
                image={quizImage.src}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={quizImage.alt}
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </div>
          <div className="column-50">
            <h2 className="quiz-section__heading">
              {data.frontPageQuizSectionSrb.quizSectionTitleSrb}
            </h2>
            <p>{data.frontPageQuizSectionSrb.quizSectionParagraphSrb}</p>
            <ul className="quiz-section__list">
              <li className="quiz-section__list-item">
                {data.frontPageQuizSectionSrb.quizSectionText1Srb}
              </li>
              <li className="quiz-section__list-item">
                {data.frontPageQuizSectionSrb.quizSectionText2Srb}
              </li>
              <li className="quiz-section__list-item">
                {data.frontPageQuizSectionSrb.quizSectionText3Srb}
              </li>
            </ul>
            <Button
              link={`${data.frontPageQuizSectionSrb.quizSectionButtonSrb.url}`}
            >
              {data.frontPageQuizSectionSrb.quizSectionButtonSrb.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FrontPageQuizSectionSrb
