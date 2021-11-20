import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ButtonExternal from "../button/ButtonExternal"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allWpMenu(filter: { name: { eq: "Primary Menu" } }) {
        edges {
          node {
            menuItems {
              nodes {
                childItems {
                  nodes {
                    label
                    id
                    url
                    title
                    path
                    parentId
                  }
                }
                id
                label
                url
                title
                path
                parentId
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const flatListToHierarchical = (
    data = [],
    { idKey = "key", parentKey = "parentId", childrenKey = "children" } = {}
  ) => {
    const tree = []
    const childrenOf = {}
    data.forEach(item => {
      const newItem = { ...item }
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
      childrenOf[id] = childrenOf[id] || []
      newItem[childrenKey] = childrenOf[id]
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
    })
    return tree
  }
  let hierarchicalList = flatListToHierarchical(
    data.allWpMenu.edges[0].node.menuItems.nodes
  )
  console.log(hierarchicalList)
  const [open, setOpen] = useState(false)
  return (
    <nav className="main__nav">
      <ul className={open === true ? "nav__menu menu-show" : "nav__menu"}>
        {hierarchicalList.map(node => {
          return (
            <li key={node.id} className="nav__menu-item">
              <Link
                className="nav__menu-link"
                to={`${
                  node.url !== "https://learningmakeover.com/" ? node.url : "/"
                }`}
              >
                {node.label}
              </Link>
              <ul className="sub-menu">
                {node.childItems &&
                  node.childItems.nodes.map(node => (
                    <li className="sub-menu__item" key={node.id}>
                      <Link className="nav__menu-link" to={node.url}>
                        {node.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          )
        })}
      </ul>
      <div className="main-nav__button-wrapper">
        <ButtonExternal className={``} link={"/"}>
          Start learning
        </ButtonExternal>
      </div>
      <div
        className={open === true ? "nav__btn btn__rotate" : "nav__btn"}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        tabIndex="0"
      >
        <div className="nav__line"> </div>

        <div className="nav__line"> </div>
      </div>
    </nav>
  )
}

export default Menu
