// React
import React, { useState } from 'react'
// Components 
import View from '../../../components/HtmlComponents/View/View'
import ButtonBase from '../../../components/Buttons/Button/ButtonBase'
import Label from '../../../components/HtmlComponents/Label/Label'
import Preview from './Preview/Preview'
// Global 
import { getCurrentDateTime } from '../../../global/getCurrentDate'
// Docx
import { Document, Packer, Paragraph } from 'docx'
import { saveAs } from 'file-saver'
import { TableDocx } from './TableDocx'
// Sim Data
import { data } from './EnrollsData.sim'

//Styles
import './ReportEnroll.styles.css'

/**
The ReportEnroll page component displays the report page of the application
@param {Object} props - The component's properties.
@returns {JSX.Element} - The rendered component.
*/
const ReportEnroll = ({}) => {

  const [document, setDocument] = useState()

  const getTables = async(data) => {
    const elements = []
    await data.forEach(async (course) => {
      elements.push(await TableDocx(course))
      elements.push(new Paragraph({ text: '' }),)
    })
    return elements
  }

  const generate = async() => {
    const doc = new Document({
      sections: [
        {
          children: [
            ...await getTables(data)
          ]
        }
      ]
    })

    const dateTime = getCurrentDateTime()
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `Reporte Admisión y Registro ${dateTime.year}-${dateTime.month}-${dateTime.day} .docx`)
      console.log('Document created successfully')
      setDocument(<iframe src={url} title="Table Components" />)
    })

    const blob = await Packer.toBlob(doc)
    const url = URL.createObjectURL(blob)
    setDocument(<iframe src={url} title="Table Components" />)
  }

  return (
    <View 
      className='report-enrolls-container'
    >
      <View
        className='btn-download-enrolls'
      >
        <ButtonBase 
          onClick={generate}
        >
          <Label
            className='body5'
          >
            DESCARGAR
          </Label>
        </ButtonBase>
      </View>
      <Preview 
        data={data}
      />
    </View>
  )
}

export default ReportEnroll
