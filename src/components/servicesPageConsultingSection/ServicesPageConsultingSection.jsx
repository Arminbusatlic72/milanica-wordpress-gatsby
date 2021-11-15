import React from "react"
import Card from "../card/Card"

const ServicesPageConsultingSection = props => {
  let data = props.consultingData

  return (
    <section className="consulting-section">
      <div className="global-wrapper">
        <div className="row">
          <div className="column-40">
            <h2 className="consulting-section__heading">
              {data.servicesPage.pagetitle}
            </h2>
            <h6 className="consulting-section__subheading">
              {data.servicesPage.pagesubtitle}
            </h6>
            <h6 className="consulting-section__text">
              {data.servicesPage.text}
            </h6>
          </div>
          <div className="column-60">
            <div className="consulting-section__blur-background"></div>
            <Card
              question={data.servicesPage.question.question}
              answer={data.servicesPage.question.answer}
            />
            <Card
              question={data.servicesPage.question1.question}
              answer={data.servicesPage.question1.answer}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPageConsultingSection
