import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'


const data = [
  {
    firstname: 'John',
    lastname: 'Smith',
    job: 'Analyst',
    location: 'Philadelphia',
    level: '12'
  },
  {
    firstname: 'Jane',
    lastname: 'Doe',
    job: 'Senior Analyst',
    location: 'New York City',
    level: '10'
  },
  {
    firstname: 'Robert',
    lastname: 'Jones',
    job: 'Consultant',
    location: 'Chicago',
    level: '9'
  },
  {
    firstname: 'Angela',
    lastname: 'Stoneworth',
    job: 'Senior Consultant',
    location: 'Washington DC',
    level: '8'
  },
  {
    firstname: 'Jack',
    lastname: 'Fire',
    job: 'Manager',
    location: 'Miami',
    level: '7'
  },
  {
    firstname: 'Donny',
    lastname: 'Doe',
    job: 'Senior Manager',
    location: 'Philadelphia',
    level: '6'
  },
  {
    firstname: 'Ruby',
    lastname: 'Reynolds',
    job: 'Manager',
    location: 'New York City',
    level: '7'
  },
  {
    firstname: 'Lenard',
    lastname: 'Bonaparte',
    job: 'Analyst',
    location: 'Chicago',
    level: '12'
  }
]

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstname',
          },
          {
            Header: 'Last Name',
            accessor: 'lastname',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Job',
            accessor: 'job',
          },
          {
            Header: 'Location',
            accessor: 'location',
          },
          {
            Header: 'Level',
            accessor: 'level',
          },
        ],
      },
    ],
    []
  )



  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default App
