import React from "react"
import Item from "./Item"
const FrontPageWhyWorkWithMeSection = props => {
  let data = props.whyWorkWithMeData
  return (
    <section className="whyWorkWithMe-section">
      <div className="global-wrapper">
        <div className="whyWorkWithMe-section__heading-wrapper">
          <h2 className="whyWorkWithMe-section__heading">
            {data.frontPageWhyWorkWithMeSection.whytitle}
          </h2>
        </div>
        <div className="row">
          <div className="column-33">
            <Item>{data.frontPageWhyWorkWithMeSection.whyWorkWithMeText1}</Item>
          </div>
          <div className="column-33">
            <Item>{data.frontPageWhyWorkWithMeSection.whyWorkWithMeText2}</Item>
          </div>
          <div className="column-33">
            <Item>{data.frontPageWhyWorkWithMeSection.whyWorkWithMeText3}</Item>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageWhyWorkWithMeSection
