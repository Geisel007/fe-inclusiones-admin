// React
import React, { useRef } from 'react' 
import { useNavigate } from 'react-router-dom'
// Components
import View from '../../components/HtmlComponents/View/View'
import Label from '../../components/HtmlComponents/Label/Label'
import InputData from '../../components/InputData/InputData'
import Image from '../../components/HtmlComponents/Image/Image'
import ButtonBase from '../../components/Buttons/Button/ButtonBase'
import Span from '../../components/HtmlComponents/Span/Span'
// Icons
import LogoTec from '../../assets/icons/logo-tec.svg'
import ArrowForward from '../../assets/icons/arrow-forward.svg'

// Styles
import './Login.styles.css' 

/**
@file Login page component
@property {string} [propName] - Description of the prop.
@returns {JSX.Element} Login page component
*/
const Login = ({ }) => {

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  const navigate = useNavigate()

  const validateData = () => {
    return (
      false
    )
  }

  const login = () => {
    console.log(inputEmailRef.current.value)
    console.log(inputPasswordRef.current.value)
    // logic login here
    navigate('/home')
  }

  return (
    <View 
      className='container-login-page'
    >
      <View
        className='sub-container-logo-tec'
      >
        <Image 
          src={LogoTec}
        />
      </View>
      <View
        className='sub-container-login'
      >
        <View
          className='login'
        >
          <Label
            className='h4'
          >
            Iniciar Sesión
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
            Contraseña
          </Label>
          <InputData 
            type='password'
            ref={inputPasswordRef}
            placeholder='Ingresa tu contraseña'
          />
          <ButtonBase
            icon={ArrowForward}
            disabled={validateData()}
            onClick={() => login()}
          >
            <Label
              className='body5'
            >
              Ingresar
            </Label>
          </ButtonBase>
          <View>
            <Label
              className='body2'
            >
              ¿No tienes cuenta?
            </Label>
            <Span
              className='body3 span-create-account'
              onClick={() =>  navigate('/create-account')}
            >
              Crear Cuenta
            </Span>
          </View>
        </View>
      </View>
    </View>
  ) 
} 

export default Login 
