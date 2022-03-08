import React from "react"
import { graphql } from "gatsby"
import LayoutSrb from "../../components/layout/LayoutSrb"
import AboutPageSectionSrb from "../../components/aboutPageSection/AboutPageSectionSrb"
import PageContactFormSectionSrb from "../../components/pageContactFormSection/PageContactFormSectionSrb"
import Seo from "../../components/seo"

const oNamaPage = ({ data }) => {
  return (
    <>
      <LayoutSrb langData={data.allWpPage.edges[0].node.translations}>
        <Seo title={data.allWpPage.edges[0].node.title} />
        <AboutPageSectionSrb aboutData={data.allWpPage.edges[0].node} />
        <PageContactFormSectionSrb
          title={"Kontaktirajte nas"}
          subtitle={"Zakažite sastanak"}
        />
      </LayoutSrb>
    </>
  )
}
export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/sr/o-nama/" } }) {
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
          aboutPageSectionSrb {
            aboutPageNameSrb
            aboutPagePositionSrb
            aboutPageTextSrb
            aboutPageText1Srb
            aboutPageText2Srb
            aboutPageText3Srb
            aboutPageImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`
export default oNamaPage
