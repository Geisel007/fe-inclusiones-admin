import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MaterialReactTable as LibMaterialReactTable } from 'material-react-table'
import './MaterialReactTable.css'

const MaterialReactTable = ({
  columnsInformation,
  records,
  onClickRow,
}) => {  
  const rowVirtualizerInstanceRef = useRef(null)

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sorting, setSorting] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined' && records.length > 0) {
      setData(records)
      setIsLoading(false)
    }
  }, [records])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        setIsLoading(false)
      }, 30000)
    }
  }, [])

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0)
    } catch (error) {
      console.error(error)
    }
  }, [sorting])

  return (
    <>    
    <LibMaterialReactTable
      columns={useMemo(() => columnsInformation, [],)}
      data={data}
      enableBottomToolbar={false}
      enableGlobalFilterModes
      enablePagination={false}
      enableFullScreenToggle={false}
      enableRowNumbers
      enableRowVirtualization
      muiTableBodyRowProps={({ row }) => ({
        onClick: (event) => {
          if (onClickRow) {
            onClickRow(row.original)
          }
        },
        sx: {
          cursor: onClickRow ? 'pointer' : 'default', //you might want to change the cursor too when adding an onClick
        },
      })}
      columnResizeMode="onEnd"
      onSortingChange={setSorting}
      enableColumnResizing 
      state={{ isLoading, sorting }}
      rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //optional
      initialState={{ density: 'compact' }}
      rowVirtualizerProps={{ overscan: 1 }} //optionally customize the virtualizer
    />
    </>
  )
}

export default MaterialReactTable
