import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Icon from "./Icon"

const FooterMenu = () => {
  const data = useStaticQuery(graphql`
    {
      allWpMenu(filter: { name: { eq: "Footer Menu" } }) {
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
    <ul className="footer-menu__nav-list">
      {data.allWpMenu.edges[0].node.menuItems.nodes.map(item => {
        return <Icon key={item.id} menuData={item} />
      })}
    </ul>
  )
}

export default FooterMenu
