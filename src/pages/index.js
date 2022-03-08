import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import FrontPageHeroSection from "../components/frontPageHeroSection/FrontPageHeroSection"
import FrontPageAboutSection from "../components/frontPageAboutSection/FrontPageAboutSection"
import FrontPageAboutFounderSection from "../components/frontPageAboutFounderSection/FrontPageAboutFounderSection"
import FrontPageWhyWorkWithMeSection from "../components/frontPageWhyWorkWithMeSection/FrontPageWhyWorkWithMeSection"
import FrontPageWhatDoIDoSection from "../components/frontPageWhatDoIDoSection/FrontPageWhatDoIDoSection"
import TestimonialSlider from "../components/testimonialSlider/TestimonialSlider"
import Seo from "../components/seo"
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout langData={data.allWpPage.edges[0].node.translations}>
        <Seo title="Home" />
        <FrontPageHeroSection heroData={data.allWpPage.edges[0].node} />
        <FrontPageAboutSection aboutData={data.allWpPage.edges[0].node} />
        <FrontPageAboutFounderSection
          aboutFounderData={data.allWpPage.edges[0].node}
        />
        <FrontPageWhyWorkWithMeSection
          whyWorkWithMeData={data.allWpPage.edges[0].node}
        />
        <FrontPageWhatDoIDoSection
          whatDoIDoData={data.allWpPage.edges[0].node}
        />
        <TestimonialSlider />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/" } }) {
      edges {
        node {
          translations {
            link
            uri
            language {
              code
            }
          }
          frontPageHeroSection {
            heroImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            heading
            headingSecondLine
            headingThirdLine
            subheading
            text
            herobutton {
              title
              url
            }
          }
          frontPageAboutSection {
            aboutimage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            title
            button {
              title
              url
            }
            accordion {
              accordion1Title
              accordion1Text
              accordion2Text
              accordion2Title
              accordion3Title
              accordion3Text
            }
          }
          frontPageAboutFounderSection {
            foundertext
            foundertitlefirstline
            foundertitlesecondline
            foundernameposition
            founderimage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          frontPageWhyWorkWithMeSection {
            whytitle
            whyWorkWithMeText3
            whyWorkWithMeText2
            whyWorkWithMeText1
          }
          frontPageWhatDoIDoSection {
            whatDoIDoSubtitle
            whatDoIDoSubtitle1
            whatDoIDoText1
            whatDoIDoText2
            whatDoIDoTitle
            whatDoIDoButton {
              title
              url
            }
            whatDoIDoSmall
          }
        }
      }
    }
  }
`

export default IndexPage
