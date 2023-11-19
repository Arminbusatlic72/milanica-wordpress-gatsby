import React from "react"
import { graphql } from "gatsby"
import LayoutSrb from "../../components/layout/LayoutSrb"
import FrontPageHeroSectionSrb from "../../components/frontPageHeroSection/FrontPageHeroSectionSrb"
import FrontPageAboutSectionSrb from "../../components/frontPageAboutSection/FrontPageAboutSectionSrb"
import FrontPageAboutFounderSectionSrb from "../../components/frontPageAboutFounderSection/FrontPageAboutFounderSectionSrb"
import FrontPageWhyWorkWithMeSectionSrb from "../../components/frontPageWhyWorkWithMeSection/FrontPageWhyWorkWithMeSectionSrb"
import FrontPageWhatDoIDoSectionSrb from "../../components/frontPageWhatDoIDoSection/FrontPageWhatDoIDoSectionSrb"
import ReferenceSectionSrb from "../../components/referencesSection/ReferencesSectionSrb"
import TestimonialSliderSrb from "../../components/testimonialSlider/TestimonialSliderSrb"
import Seo from "../../components/seo"
const IndexPage = ({ data }) => {
  return (
    <>
      <LayoutSrb langData={data.allWpPage.edges[0].node.translations}>
        <Seo title={data.allWpPage.edges[0].node.title} />
        <FrontPageHeroSectionSrb heroData={data.allWpPage.edges[0].node} />
        <FrontPageAboutSectionSrb aboutData={data.allWpPage.edges[0].node} />
        <FrontPageAboutFounderSectionSrb
          aboutFounderData={data.allWpPage.edges[0].node}
        />
        <FrontPageWhyWorkWithMeSectionSrb
          whyWorkWithMeData={data.allWpPage.edges[0].node}
        />
        <FrontPageWhatDoIDoSectionSrb
          whatDoIDoData={data.allWpPage.edges[0].node}
        />
        <ReferenceSectionSrb />
        <TestimonialSliderSrb />
      </LayoutSrb>
    </>
  )
}

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/" } }) {
      edges {
        node {
          title
          translations {
            link
            uri
            language {
              code
            }
          }
          frontPageHeroSectionSrb {
            heroImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            headingsrb
            headingSecondLineSrb
            headingThirdLineSrb
            subheadingSrb
            textSrb
            herobuttonsrb {
              title
              url
            }
          }
          frontPageAboutSectionSrb {
            aboutimage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            titlesrb
            buttonsrb {
              title
              url
            }
            accordionsrb {
              accordion1Titlesrb
              accordion1Textsrb
              accordion2Textsrb
              accordion2Titlesrb
              accordion3Titlesrb
              accordion3Textsrb
            }
          }
          frontPageAboutFounderSectionSrb {
            foundertextsrb
            foundertitlefirstlinesrb
            foundertitlesecondlinesrb
            foundernamepositionsrb
            founderimage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          frontPageWhyWorkWithMeSectionSrb {
            whytitlesrb
            whyWorkWithMeText3Srb
            whyWorkWithMeText2Srb
            whyWorkWithMeText1Srb
          }
          frontPageWhatDoIDoSectionSrb {
            whatDoIDoSubtitleSrb
            whatDoIDoSubtitle1Srb
            whatDoIDoText1Srb
            whatDoIDoText2Srb
            whatDoIDoTitleSrb
            whatDoIDoButtonSrb {
              title
              url
            }
            whatDoIDoSmallSrb
          }
        }
      }
    }
  }
`

export default IndexPage
