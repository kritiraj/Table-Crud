import React, { useState } from 'react'
import Form from '../components/form'
import TableComponent from '../components/TableComponent'
import { DATA } from './data'

const columns = [
  {
    header: 'íd',
    accessor: 'id',
  },
  {
    header: 'Name',
    accessor: 'name',
  },

  {
    header: 'Contact',
    accessor: 'contact',
  },
]

const JPMCTable = () => {
  const [selectedData, setSelectedData] = useState(null)
  const [data, setData] = useState(DATA)

  const onRowClick = (data) => setSelectedData(data)

  const submit = (formData) => {
    setData(data.map((d) => (d.id === formData.id ? formData : d)))
  }
  return (
    <>
      <TableComponent data={data} columns={columns} onRowClick={onRowClick} />
      {selectedData ? (
        <>
          <Form data={selectedData} />
          <button
            onClick={() =>
              submit({
                id: 3,
                name: 'arnoldsss',
                contact: '1234',
              })
            }
          >
            Submit
          </button>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default JPMCTable
