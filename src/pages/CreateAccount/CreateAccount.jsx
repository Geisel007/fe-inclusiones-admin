// React
import React, { useRef } from 'react' 
import { useNavigate } from 'react-router-dom'
// Components
import View from '../../components/HtmlComponents/View/View'
import Label from '../../components/HtmlComponents/Label/Label'
import InputData from '../../components/InputData/InputData'
import Image from '../../components/HtmlComponents/Image/Image'
import ButtonBase from '../../components/Buttons/Button/ButtonBase'
import Dropdown from '../../components/DropDown/DropDown'
// Icons
import LogoTec from '../../assets/icons/logo-tec.svg'
import ArrowForward from '../../assets/icons/arrow-forward.svg'

// Styles
import './CreateAccount.styles.css' 

/**
@file CreateAccount page component
@property {string} [propName] - Description of the prop.
@returns {JSX.Element} CreateAccount page component
*/
const CreateAccount = ({ }) => {

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  const navigate = useNavigate()

  const validateData = () => {
    return (
      false
    )
  }

  const createAccount = () => {
    navigate('/')
  }

  return (
    <View 
      className='container-create-account-page'
    >
      <View
        className='sub-container-logo-tec'
      >
        <Image 
          src={LogoTec}
        />
      </View>
      <View
        className='sub-container-create-account'
      >
        <View
          className='create-account'
        >
          <Label
            className='h4'
          >
            Crear Cuenta
          </Label>
          <Label
            className='body2'
          >
            Correo
          </Label>
          <InputData 
            type='email'
            ref={inputEmailRef}
            placeholder='Ingresa tu correo institucional'
          />
          <Label
            className='body2'
          >
            Nombre
          </Label>
          <InputData 
            type='text'
            ref={inputEmailRef}
            placeholder='Ingresa tu nombre'
          />
          <Label
            className='body2'
          >
            Primer Apellido
          </Label>
          <InputData 
            type='text'
            ref={inputEmailRef}
            placeholder='Ingresa tu primer apellido'
          />
          <Label
            className='body2'
          >
            Segundo Apellido
          </Label>
          <InputData 
            type='text'
            ref={inputEmailRef}
            placeholder='Ingresa tu segundo apellido'
          />
          <Label
            className='body2'
          >
            Contraseña
          </Label>
          <InputData 
            type='password'
            ref={inputPasswordRef}
            placeholder='Crea tu contraseña'
          />
          <Label
            className='body2'
          >
            Comprobación de Contraseña
          </Label>
          <InputData
            type='password'
            ref={inputPasswordRef}
            placeholder='Confirma tu contraseña'
          />
          <Dropdown
            title='Selecciona una Sede'
          />
          <Dropdown 
            title='Selecciona una Escuela'
          />
          <ButtonBase
            icon={ArrowForward}
            disabled={validateData()}
            onClick={() => createAccount()}
          >
            <Label
              className='body3'
            >
              Crear Cuenta
            </Label>
          </ButtonBase>
        </View>
      </View>
    </View>
  ) 
} 

export default CreateAccount 
