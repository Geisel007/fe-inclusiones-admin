// React
import React from 'react'
// Components 
import View from '../../components/HtmlComponents/View/View'
import Label from '../../components/HtmlComponents/Label/Label'
import InputData from '../../components/InputData/InputData'
import DragAndDrop from '../../components/FileUploader/DragAndDrop'
import ButtonBase from '../../components/Buttons/Button/ButtonBase'
import { CustomColors } from '../../constants/CustomColors'

//Styles
import './Settings.styles.css'

/**
The Settings page component displays the settings page of the application
@param {Object} props - The component's properties.
@returns {JSX.Element} - The rendered component.
*/
const Settings = ({}) => {

  return (
    <View 
      className='settings-container'
    >
      <View
        className='container-new-period '
      >
        <Label
          className='h7'
        >
          Nuevo Período de Inscripción
        </Label>  
        <View
          className='inputs'
        >
          <View
            className='input-period'
          >
            <Label
              className='body3'
            >
              Título
            </Label>
            <InputData
              type='text'
              placeholder='Título del período'
            />
          </View>
          <View
            className='input-period'
          >
            <Label
              className='body3'
            >
              Fecha Inicial
            </Label>
            <InputData
              type='date'
            />
            <Label
              className='body3'
            >
              Fecha Final
            </Label>
            <InputData
              type='date'
            />
          </View>
          <DragAndDrop/>
          <ButtonBase
            style={{ maxWidth: '10%', height: '40px'}}
          >
            <Label
              className='subtitle3'
              style={{ 
                color: CustomColors.whiteRegular
              }}
            >
              Crear
            </Label>

          </ButtonBase>
        </View>
      </View>
    </View>
  )
}

export default Settings
