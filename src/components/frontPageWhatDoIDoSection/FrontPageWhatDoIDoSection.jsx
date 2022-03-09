import React from "react"
import Button from "../button/Button"
const FrontPageWhatDoIDoSection = props => {
  let data = props.whatDoIDoData

  return (
    <section className="whatDoIDo-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-40">
            <div className="whatDoIDo-section__blur-background"></div>

            <div className="whatDoIDo-section__heading-wrapper">
              <h2 className="whatDoIDo-section__heading">
                {data.frontPageWhatDoIDoSection.whatDoIDoTitle}
              </h2>
            </div>
          </div>

          <div className="column-60">
            <h3 className="whatDoIDo-section__subheading">
              {data.frontPageWhatDoIDoSection.whatDoIDoSubtitle}
            </h3>
            <p className="whatDoIDo-section__small">
              {data.frontPageWhatDoIDoSection.whatDoIDoSmall}
            </p>
            <ul className="whatDoIDo-section__list">
              <li className="whatDoIDo-section__list-item">
                {data.frontPageWhatDoIDoSection.whatDoIDoText1}
              </li>
              <li className="whatDoIDo-section__list-item">
                {data.frontPageWhatDoIDoSection.whatDoIDoText2}
              </li>
            </ul>
            <h3 className="whatDoIDo-section__subheading">
              {data.frontPageWhatDoIDoSection.whatDoIDoSubtitle1}
            </h3>
            <Button
              className={"relative"}
              link={`${data.frontPageWhatDoIDoSection.whatDoIDoButton.url}`}
            >
              {data.frontPageWhatDoIDoSection.whatDoIDoButton.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageWhatDoIDoSection
