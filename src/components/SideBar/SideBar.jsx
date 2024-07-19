// React
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Icons
import iconMenu from '../../assets/icons/menu.svg'
import iconClose from '../../assets/icons/close.svg'
// Components 
import View from '../HtmlComponents/View/View'
import Image from '../HtmlComponents/Image/Image'
import Span from '../HtmlComponents/Span/Span'
import Ul from '../HtmlComponents/Ul/Ul'
import Li from '../HtmlComponents/Li/Li'
// Constants
import { SideBarOptions } from '../../constants/SideBarOptions'

// Styles
import './SideBar.styles.css'

/**
This component represents the SideBar of the application.
It displays the logo of the app and a list of options to navigate to different sections of the app.
@return {JSX.Element} A JSX element representing the side bar.
*/
const SideBar = ({ 
  setSelectedOption
}) => {

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  const handleSideBar = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (option) => {
    navigate(option.path)
    setSelectedOption(option.text)
  }

  const getOptions = () => {
    return (
      <Ul
        className='side-bar-options'
      >
        {
          SideBarOptions.map((option, index) => (
            <Li
              key={index}
              onClick={() => handleSelectOption(option)}
            >
              <Image 
                src={option.icon}
                className='option-side-bar'
                style={{ fill: 'red'}}
              />
              {
                isOpen && (
                  <Span
                    className='h6'
                  >
                    {option.text}
                  </Span>
                )
              }
            </Li>
          ))
        }
      </Ul>
    )
  }

  return (
    <View className='side-bar-container'>
      {
        !isOpen && (
          <View
            className='sub-container-side-bar'
          >
            <Span
              onClick={() => handleSideBar()}
            >
              <Image 
                src={iconMenu} 
                className='option-side-bar'
              /> 
            </Span>
            { getOptions() }
          </View>
        )
      }
      {
        isOpen && (
          <View
            className='open-side-bar'
          >
            <Span
              onClick={() => handleSideBar()}
            >
              <View
                className='icon-close-side-bar'
              >
                <Image 
                  src={iconClose} 
                  className='option-side-bar'
                /> 
              </View>
            </Span>
            { getOptions() }
          </View>
        )
      }
    </View>
  )
}

export default SideBar
