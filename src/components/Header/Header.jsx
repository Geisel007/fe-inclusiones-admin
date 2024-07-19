// React
import React from 'react'
// Components
import View from '../HtmlComponents/View/View'
import Label from '../HtmlComponents/Label/Label'
import Image from '../HtmlComponents/Image/Image'
// Icons
import LogoTec from '../../assets/icons/logo-tec2.svg'

//Styles
import './Header.styles.css'

/**
React component for the header of a page.
@module Header
@param {Object} props - The props object for the component.
@return {JSX.Element} A JSX element representing the header.
*/
const Header = ({ 
  selectedOption
}) => {

  return (
    <View 
      className='header-home'
    >
      <Label
        className='h5'
      >
        {selectedOption}
      </Label>
      <Image
        src={LogoTec}
      />
      <Label
        className='h5'
      >
        Ericka Marín 
      </Label>
      

    </View>    
  )
}

export default Header
