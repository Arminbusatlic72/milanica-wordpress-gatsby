import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ButtonExternal from "../button/ButtonExternal"
import MenuItem from "./MenuItem"
import DropdownMenuItem from "./DropDownMenuItem"

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
        {hierarchicalList.map(menuItem => {
          const children = menuItem.childItems.nodes.length
            ? menuItem.childItems.nodes
            : null
          return children ? (
            <DropdownMenuItem parent={menuItem} children={children} />
          ) : (
            <MenuItem menuItem={menuItem} />
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
