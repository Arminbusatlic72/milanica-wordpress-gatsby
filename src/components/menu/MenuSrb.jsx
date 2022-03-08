import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../button/Button"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"
import MenuItem from "./MenuItem"
import DropdownMenuItemSrb from "./DropDownMenuItemSrb"

const MenuSrb = props => {
  let langSwData = props.langData

  const data = useStaticQuery(graphql`
    {
      allWpMenu(filter: { name: { eq: "Primary Menu Srb" } }) {
        edges {
          node {
            menuButton {
              primaryMenuButton {
                title
                url
              }
            }
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

  const [open, setOpen] = useState(false)

  return (
    <nav className="main__nav">
      <ul className={open === true ? "nav__menu menu-show" : "nav__menu"}>
        <LanguageSwitcher langData={langSwData} />
        {hierarchicalList.map(menuItem => {
          const children = menuItem.childItems.nodes.length
            ? menuItem.childItems.nodes
            : null
          return children ? (
            <DropdownMenuItemSrb
              key={menuItem.id}
              parent={menuItem}
              children={children}
            />
          ) : (
            <MenuItem key={menuItem.id} menuItem={menuItem} />
          )
        })}
      </ul>
      <Button
        className={`button--sm`}
        link={data.allWpMenu.edges[0].node.menuButton.primaryMenuButton.url}
        icon={false}
      >
        {data.allWpMenu.edges[0].node.menuButton.primaryMenuButton.title}
      </Button>
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

export default MenuSrb
