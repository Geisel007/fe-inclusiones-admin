// React
import React, { useState } from 'react'
// Components 
import View from '../../components/HtmlComponents/View/View'
import DropDown from '../../components/DropDown/DropDown'
import { Constants } from '../../constants/Constants'
import Label from '../../components/HtmlComponents/Label/Label'
import ReportEnroll from './ReportEnrollsWord/ReportEnroll'

//Styles
import './Report.styles.css'

/**
The Report page component displays the report page of the application
@param {Object} props - The component's properties.
@returns {JSX.Element} - The rendered component.
*/
const Report = ({}) => {

  const [selectedReport, setSelectedReport] = useState(0)

  const getReport = (report) => {
    switch (report) {
      case 0:
        return (
          <ReportEnroll/>
        )
    }
  }

  return (
    <View className='report-container'>
      <View
        className='header-report'
      >
        <Label
          className='h7'
        >
          {Constants.typeReports[selectedReport]}
        </Label>
        <DropDown 
          title={'Seleccione un tipo de reporte'}
          options={Constants.typeReports}
          selectedOption={selectedReport}
          setSelectedOption={setSelectedReport}
        />
      </View>
      <View
        className='content-report'
      >
        {getReport(selectedReport)}
      </View>
    </View>
  )
}

export default Report
