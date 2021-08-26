import React from 'react'

const TableComponent = (props) => {
  const { columns, data, onRowClick } = props
  return (
    <table>
      <thead>
        <tr>
        {columns.map((column, index) => (
          <th key={index}>{column.header}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.map((item,i) => (
        <tr key={i} onClick={() => onRowClick(item)}>
          {columns.map((column, index) => (
            <td key={index}>{item[column.accessor]}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default TableComponent
