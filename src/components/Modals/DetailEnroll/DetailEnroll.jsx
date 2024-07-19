// React
import React, { useRef } from 'react'
// Icons
import CloseIcon from '../../../assets/icons/close.svg'
// Components
import View from '../../HtmlComponents/View/View'
import Span from '../../HtmlComponents/Span/Span'
import Image from '../../HtmlComponents/Image/Image'
import Label from '../../HtmlComponents/Label/Label'
import InputData from '../../InputData/InputData'
import CheckBox from '../../CheckBox/CheckBox'
import ButtonBase from '../../Buttons/Button/ButtonBase'
import Dropdown from '../../DropDown/DropDown'
// Constants
import { CustomColors } from '../../../constants/CustomColors'

// Styles
import './DetailEnroll.css'

const DetailEnroll = ({
  data,
  setOpenModal
}) => {

  const checkRequisites = useRef()

  return (
    <View
      className='modal-detail-enroll'
    >
      <View
        className='control-detail-enroll'
      >
        <Label
          className='subtitle3'
        >
          Detalle de Inclusión
        </Label>
        <Span
          onClick={() => setOpenModal(false)}
        >
          <Image
            src={CloseIcon}
          />
        </Span>
        
      </View>
      <View
        className='container-detail-enroll'
      >
        <View
          className='sub-container'
        >
          <Label
            className='body3'
          >
            Nombre del estudiante
          </Label>
          <InputData
            type='text'
            value={data.student}
          />
          <Label
            className='body3'
          >
            Correo Institucional
          </Label>
          <InputData
            type='text'
            value={data.email}
          />
          <Label
            className='body3'
          >
            Número de Carnet
          </Label>
          <InputData
            type='text'
            value={data.carnet}
          />
          <Label
            className='body4'
          >
            Condición del estudiante
          </Label>
          <CheckBox 
            ref={checkRequisites}
            value={data.condition.requisites}
          >
            <Label
              className='body3'
            >
              Requisitos completos
            </Label>
          </CheckBox>
          <CheckBox 
            ref={checkRequisites}
            value={data.condition.coRequisites}
          >
            <Label
              className='body3'
            >
              Correquisitos
            </Label>
          </CheckBox>
          <CheckBox 
            ref={checkRequisites}
            value={data.condition.rnCondition}
          >
            <Label
              className='body3'
            >
              Condición RN
            </Label>
          </CheckBox>
          <CheckBox 
            ref={checkRequisites}
            value={data.condition.scholarship}
          >
            <Label
              className='body3'
            >
              Beca
            </Label>
          </CheckBox>
        </View>
        <View
          className='sub-container'
        >
          <Label
            className='body3'
          >
            Curso
          </Label>
          <InputData
            type='text'
            value={data.course}
          />
          <Label
            className='body3'
          >
            Horario
          </Label>
          <InputData
            type='text'
            value={data.schedule}
          />
          <Label
            className='body3'
          >
            Modalidad
          </Label>
          <InputData
            type='text'
            value={data.modality}
          />
          <Label
            className='body3'
          >
            Grupo
          </Label>
          <InputData
            type='text'
            value={data.group}
          />
          <Label
              className='body3'
          >
            Profesor
          </Label>
          <InputData
            type='text'
            value={data.teacher}
          />
          <Label
              className='body3'
          >
            Sede
          </Label>
          <InputData
            type='text'
            value={data.campus}
          />
          <Label
              className='body3'
          >
            Estado
          </Label>
          <InputData
            type='text'
            value={data.status}
          />
        </View>
      </View>
      <View
        className='buttons'
      >
        <ButtonBase
          style={{ 
            background: CustomColors.whiteRegular,
            borderColor: CustomColors.redTec,
            maxWidth: '150px'
          }}
        >
          <Label
            className='subtitle3'
            style={{ 
              color: CustomColors.redTec
            }}
          >
            Rechazar
          </Label>
        </ButtonBase>
        <ButtonBase
          style={{ 
            background: CustomColors.blueTec,
            borderColor: CustomColors.blueTec,
            maxWidth: '150px'
          }}
        >
          <Label
            className='subtitle3'
            style={{ 
              color: CustomColors.whiteRegular
            }}
          >
            Aprobar
          </Label>
        </ButtonBase>
        <ButtonBase
          style={{ 
            background: CustomColors.grayLight,
            borderColor: CustomColors.grayLight,
            maxWidth: '150px'
          }}
        >
          <Label
            className='subtitle3'
            style={{ 
              color: CustomColors.gray
            }}
          >
            Pendiente
          </Label>
        </ButtonBase>
      </View>
    </View>
  )
}

export default DetailEnroll
