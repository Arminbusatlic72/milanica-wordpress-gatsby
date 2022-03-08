import React from "react"
import Card from "../card/Card"

const ServicesPageConsultingSectionSrb = props => {
  let data = props.consultingData

  return (
    <section className="consulting-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-30">
            <h2 className="consulting-section__heading">
              {data.servicesPageSrb.pagetitlesrb}
            </h2>
            <h6 className="consulting-section__subheading">
              {data.servicesPageSrb.pagesubtitlesrb}
            </h6>
            <ul className="whatDoIDo-section__list">
              <li className="whatDoIDo-section__list-item">
                {data.servicesPageSrb.aim1Srb}
              </li>
              <li className="whatDoIDo-section__list-item">
                {data.servicesPageSrb.aim2Srb}
              </li>
            </ul>
            <h6 className="consulting-section__text">
              {data.servicesPageSrb.textsrb}
            </h6>
          </div>
          <div className="column-70">
            <Card
              question={data.servicesPageSrb.questionsrb.question}
              answer={data.servicesPageSrb.questionsrb.answer}
            />
            <Card
              question={data.servicesPageSrb.question1srb.question}
              answer={data.servicesPageSrb.question1srb.answer}
            />
            <div className="consulting-section__blur-background"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPageConsultingSectionSrb
