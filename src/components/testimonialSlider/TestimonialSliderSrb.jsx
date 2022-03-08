import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TestimonialSliderSrb = () => {
  const data = useStaticQuery(graphql`
    {
      allWpTestimonialsSlide {
        edges {
          node {
            id
            testimonialsSliderContentSrb {
              nameSrb
              positionSrb
              testimonialSrb
            }
          }
        }
      }
    }
  `)
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={"slick-prev" + (currentSlide === 0 ? " slick-disabled" : "")}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <StaticImage
        src="../../images/sliderArrowL.png"
        alt="arrow"
        placeholder="TRACED_SVG"
      />
    </button>
  )
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <StaticImage
        src="../../images/sliderArrowR.png"
        alt="arrow"
        placeholder="TRACED_SVG"
      />
    </button>
  )
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrow: true,
    fade: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  }
  return (
    <section className="testimonials-slider-section">
      <div className="global-wrapper">
        <h2 className="testimonials-slider-section__heading">
          ŠTA KAŽU KLIJENTI I KOLEGE
        </h2>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {data.allWpTestimonialsSlide.edges.map(edge => (
              <div
                className="testimonials-slider-section__slide"
                key={edge.node.id}
              >
                <div className="testimonials-slider-section__slide-text-wrapper">
                  <p className="testimonials-slider-section__slide-text">
                    {edge.node.testimonialsSliderContentSrb.testimonialSrb}
                  </p>
                </div>
                <p className="testimonials-slider-section__slide-name">
                  {edge.node.testimonialsSliderContentSrb.nameSrb}
                </p>

                <p className="testimonials-slider-section__slide-position">
                  {edge.node.testimonialsSliderContentSrb.positionSrb}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSliderSrb
