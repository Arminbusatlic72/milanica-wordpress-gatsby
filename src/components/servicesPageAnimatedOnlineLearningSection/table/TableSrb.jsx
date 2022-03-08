import React from "react"

function TableSrb(props) {
  let data = props.tableData
  return (
    <div
      className="table"
      contentEditable="true"
      dangerouslySetInnerHTML={{
        __html: data.tableSrb,
      }}
    ></div>
  )
}

export default TableSrb
