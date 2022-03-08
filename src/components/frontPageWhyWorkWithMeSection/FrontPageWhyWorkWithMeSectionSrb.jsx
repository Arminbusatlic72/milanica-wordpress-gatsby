import React from "react"
import Item from "./Item"
const FrontPageWhyWorkWithMeSectionSrb = props => {
  let data = props.whyWorkWithMeData
  return (
    <section className="whyWorkWithMe-section">
      <div className="global-wrapper">
        <div className="whyWorkWithMe-section__heading-wrapper">
          <h2 className="whyWorkWithMe-section__heading">
            {data.frontPageWhyWorkWithMeSectionSrb.whytitlesrb}
          </h2>
        </div>
        <div className="row">
          <div className="column-33">
            <Item>
              {data.frontPageWhyWorkWithMeSectionSrb.whyWorkWithMeText1Srb}
            </Item>
          </div>
          <div className="column-33">
            <Item>
              {data.frontPageWhyWorkWithMeSectionSrb.whyWorkWithMeText2Srb}
            </Item>
          </div>
          <div className="column-33">
            <Item>
              {data.frontPageWhyWorkWithMeSectionSrb.whyWorkWithMeText3Srb}
            </Item>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontPageWhyWorkWithMeSectionSrb
