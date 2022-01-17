import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Coming Soon" />
      <div className="global-wrapper">
        <div className="coming-soon">
          <h1>Coming Soon</h1>
          <p>
            Stress management animated online course. The course includes
            fifteen animated video lectures 3-6min long, quizes to test
            knowledge, materials for activities and handouts.
          </p>
          <p>
            The course will be available in Serbian and English. If you want to
            be notified when the course is published and get more information,{" "}
            <a href="/contact/">click here.</a>
          </p>
          <p>
            You can{" "}
            <a href="https://www.youtube.com/watch?v=IXurUIyoHo8">preview</a>{" "}
            one of the lectures on our youtube channel.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
