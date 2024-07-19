// React
import React, { useState } from 'react'
// Components 
import View from '../../components/HtmlComponents/View/View'
import DropDown from '../../components/DropDown/DropDown'
import MaterialReactTable from '../../components/MaterialReactTable/MaterialReactTable'
// Modals
import DetailEnroll from '../../components/Modals/DetailEnroll/DetailEnroll'
// Data
import { data } from './dataSim'

//Styles
import './Enroll.styles.css'

/**
The Enroll page component displays the enroll page of the application
@param {Object} props - The component's properties.
@returns {JSX.Element} - The rendered component.
*/
const Enroll = ({}) => {

  const [openModalDetails, setOpenModalDetails] = useState(false)

  const renderCell = (columnInformation, row) => {
    if (columnInformation.accessorKey === 'estado') {
      return (
        <DropDown 
          title={row.original.estado} 
        />
      )
    } else {
      return row.original[columnInformation.accessorKey]
    }
  }  

  const columnsInformation = data.columns.map((columnInformation) => ({
    accessorKey: columnInformation.accessorKey,
    header: columnInformation.header,
    Cell: ({ row }) => renderCell(columnInformation, row),
  }))

  const onClickRow = (row) => {
    setOpenModalDetails(!openModalDetails)
    console.log(row)
  }

  return (
    <View className='enroll-container'>
      <View
        className='enroll-container-table'
      >
        <MaterialReactTable
          records={data.records}
          columnsInformation={columnsInformation}
          onClickRow={(row) => onClickRow(row)}
        />
      </View>
      {
        openModalDetails && (
          <View
            className='modal-details'
          >
            <DetailEnroll 
              data={data.detailEnrol}
              setOpenModal={setOpenModalDetails}
            />
          </View>
        )
      }
    </View>
  )
}

export default Enroll
