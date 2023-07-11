import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './DataTable.css'
const DataTable = ({columns, rows}) => {
  return (
    <div className='DataTable'>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            autoHeight
        />
    </div>
  )
}

export default DataTable