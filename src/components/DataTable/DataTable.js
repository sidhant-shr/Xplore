import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './DataTable.css'
const DataTable = ({columns, rows}) => {
  return (
    <div className='DataTable'>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            autoHeight
        />
    </div>
  )
}

export default DataTable