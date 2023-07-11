import React from 'react'
import DataTable from '../DataTable/DataTable'
import './TransactionGrid.css'
import { NavLink } from 'react-router-dom'




const columns = [
    {
        field: "id",
        headerName: "Txn",
        sortable: false,
        width: 630,

        renderCell: ({row : {id,value,asset}}) => (
            <NavLink
                state={{value, asset}}
                to = {{pathname: `/transaction/${id}` }}
                className="Navlink"
            >
                {id}

            </NavLink>

        )

    }
]
const TransactionGrid = ({rows}) => {
  return (
    <DataTable columns = {columns} rows = {rows} />
  )
}

export default TransactionGrid;