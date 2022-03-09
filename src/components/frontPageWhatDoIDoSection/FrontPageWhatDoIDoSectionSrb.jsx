import React from "react"
import Button from "../button/Button"
const FrontPageWhatDoIDoSectionSrb = props => {
  let data = props.whatDoIDoData

  return (
    <section className="whatDoIDo-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-40">
            <div className="whatDoIDo-section__blur-background"></div>

            <div className="whatDoIDo-section__heading-wrapper">
              <h2 className="whatDoIDo-section__heading">
                {data.frontPageWhatDoIDoSectionSrb.whatDoIDoTitleSrb}
              </h2>
            </div>
          </div>

          <div className="column-60">
            <h3 className="whatDoIDo-section__subheading">
              {data.frontPageWhatDoIDoSectionSrb.whatDoIDoSubtitleSrb}
            </h3>
            <p className="whatDoIDo-section__small">
              {data.frontPageWhatDoIDoSectionSrb.whatDoIDoSmallSrb}
            </p>
            <ul className="whatDoIDo-section__list">
              <li className="whatDoIDo-section__list-item">
                {data.frontPageWhatDoIDoSectionSrb.whatDoIDoText1Srb}
              </li>
              <li className="whatDoIDo-section__list-item">
                {data.frontPageWhatDoIDoSectionSrb.whatDoIDoText2Srb}
              </li>
            </ul>
            <h3 className="whatDoIDo-section__subheading">
              {data.frontPageWhatDoIDoSectionSrb.whatDoIDoSubtitle1Srb}
            </h3>
            <Button
              className={"relative"}
              link={`${data.frontPageWhatDoIDoSectionSrb.whatDoIDoButtonSrb.url}`}
            >
              {data.frontPageWhatDoIDoSectionSrb.whatDoIDoButtonSrb.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageWhatDoIDoSectionSrb
