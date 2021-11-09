import React from "react"

function Table(props) {
  let data = props.tableData
  return (
    <div
      className="table"
      contentEditable="true"
      dangerouslySetInnerHTML={{
        __html: data.table,
      }}
    ></div>
  )
}

export default Table
