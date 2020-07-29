import React from 'react'
import { Table} from './Table'
import { TableHeaderRow} from './TableHeaderRow'
import { TableHeader} from './TableHeader'

const data = [
  {
    id: 1,
    name: 'John Smith',
    job: 'Analyst',
    location: 'Philadelphia',
    level: '12'
  },
  {
    id: 2,
    name: 'Jane Doe',
    job: 'Senior Analyst',
    location: 'New York City',
    level: '10'
  },
  {
    id: 3,
    name: 'Robert Jones',
    job: 'Consultant',
    location: 'Chicago',
    level: '9'
  },
  {
    id: 4,
    name: 'Angela Stoneworth',
    job: 'Senior Consultant',
    location: 'Washington DC',
    level: '8'
  },
  {
    id: 5,
    name: 'Jack Fire',
    job: 'Manager',
    location: 'Miami',
    level: '7'
  },
  {
    id: 6,
    name: 'Donny Doe',
    job: 'Senior Manager',
    location: 'Philadelphia',
    level: '6'
  },
  {
    id: 7,
    name: 'Ruby Reynolds',
    job: 'Manager',
    location: 'New York City',
    level: '7'
  },
  {
    id: 8,
    name: 'Lenard Bonaparte',
    job: 'Analyst',
    location: 'Chicago',
    level: '12'
  }
]

class VerticalTable extends React.Component {
  render() {
    return (
      <Table
        data={data}
        pageSize={6}
        pageSizeOptions={[6, 12, 24, 48]}
        render={({
          columns,
          rows,
          setHeaderData,
          sorting,
          handleFilter,
          totalNumberOfPages,
          hasPrevPage,
          hasNextPage,
          pageSizeOptions,
          total,
          pageSize,
          currentPage,
          selectedPage,
          handleNextPage,
          handlePrevPage,
          handlePageChange,
          handlePageChangeBlur,
          handlePageSizeChange
        }) => {
          return (
            <div className="table">
              <div className="tr th">
                <TableHeaderRow>
                  <TableHeader accessor="name" sortable filterable>
                    {({ isSorting, onClick, sortable }) => (
                      <div
                        className={`td ${
                          sortable ? 'sortable' : 'no-sortable'
                        } ${isSorting ? (isSorting.asc ? 'asc' : 'desc') : ''}`}
                        onClick={onClick}
                      >
                        Name
                      </div>
                    )}
                  </TableHeader>
                  <TableHeader accessor="job" sortable filterable>
                    {({ isSorting, onClick, sortable }) => (
                      <div
                        className={`td ${
                          sortable ? 'sortable' : 'no-sortable'
                        } ${isSorting ? (isSorting.asc ? 'asc' : 'desc') : ''}`}
                        onClick={onClick}
                      >
                        Job
                      </div>
                    )}
                  </TableHeader>
                  <TableHeader accessor="location" filterable>
                    {({ isSorting, onClick, sortable }) => (
                      <div
                        className={`td ${
                          sortable ? 'sortable' : 'no-sortable'
                        } ${isSorting ? (isSorting.asc ? 'asc' : 'desc') : ''}`}
                        onClick={onClick}
                      >
                        Location
                      </div>
                    )}
                  </TableHeader>
                  <TableHeader accessor="level" filterable>
                    {({ isSorting, onClick, sortable }) => (
                      <div
                        className={`td ${
                          sortable ? 'sortable' : 'no-sortable'
                        } ${isSorting ? (isSorting.asc ? 'asc' : 'desc') : ''}`}
                        onClick={onClick}
                      >
                        Location
                      </div>
                    )}
                  </TableHeader>
                </TableHeaderRow>
              </div>
              <div className="tr">
                {columns.map(
                  (column, index) =>
                    column.filterable ? (
                      <div className="filter" key={column.accessor}>
                        {column.accessor === 'location' ? (
                          <select
                            onChange={e => {
                              handleFilter(column.accessor, e.target.value)
                            }}
                          >
                            <option />
                            <option value="USA">USA</option>
                            <option value="EU">EU</option>
                            <option value="UK">UK</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            onChange={e => {
                              e.preventDefault()

                              handleFilter(column.accessor, e.target.value)
                            }}
                            style={{ width: '100%', padding: '7px' }}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="filter" />
                    )
                )}
              </div>
              <div>
                {rows.map((row, index) => (
                  <div className="tr hover" key={index}>
                    {row &&
                      row.rowData.map(column => (
                        <div
                          key={`${column.id}-${column.accessor}`}
                          className="td"
                          style={{ justifyContent: 'center' }}
                        >
                          <span>
                            <a>{column.data}</a>
                          </span>
                        </div>
                      ))}
                  </div>
                ))}
              </div>

              <footer
                className="footer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5em 0'
                }}
              >
                <button onClick={handlePrevPage} disabled={!hasPrevPage}>
                  Prev Page
                </button>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ marginRight: '1em' }}>Page</p>
                  <input
                    type="number"
                    min={1}
                    max={totalNumberOfPages}
                    onChange={handlePageChange}
                    onBlur={handlePageChangeBlur}
                    value={selectedPage}
                  />
                  <p> of {totalNumberOfPages}</p>
                </div>

                <div>
                  <select onChange={handlePageSizeChange} value={pageSize}>
                    {pageSizeOptions.map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize} rows
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={handleNextPage} disabled={!hasNextPage}>
                  Next Page
                </button>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

export default VerticalTable
