import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostPageSection from "../components/postPageSection/PostPageSection"
import Seo from "../components/seo"
const postPage = ({ data }) => {
  return (
    <Layout langData={data.allWpPost.translations}>
      <Seo title="Post-page" />
      <PostPageSection postData={data.allWpPost}></PostPageSection>
    </Layout>
  )
}

export const query = graphql`
  {
    allWpPost {
      edges {
        node {
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          date
          title
          slug
          translations {
            link
            uri
            language {
              code
            }
          }
        }
      }
    }
  }
`
export default postPage
