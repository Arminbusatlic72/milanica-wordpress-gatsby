import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const FooterMenu = () => {
  const data = useStaticQuery(graphql`
    {
      allWpMenu(filter: { name: { eq: "Primary Menu" } }) {
        edges {
          node {
            menuItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="footer-menu">
      <ul className="footer-menu__nav-list">
        {data.allWpMenu.edges[0].node.menuItems.nodes.map(node => {
          return (
            <li key={node.id} className="footer-menu__nav-list-item">
              <Link
                className="footer-menu__nav-link"
                to={`${
                  node.url !== "https://learningmakeover.com/" ? node.url : "/"
                }`}
              >
                {node.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterMenu
