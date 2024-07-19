// React
import React, { useState } from 'react'
// Components 
import View from '../components/HtmlComponents/View/View'

//Styles
import './HomeScreenLayout.styles.css'

/**
A layout component that renders the Home Screen layout, which includes a side bar and two content areas.
@param {object} props - The props object containing the children components.
@param {Array} props.children - An array containing three children components to be rendered.
@return {JSX.Element} The JSX code representing the Home Screen Layout component.
*/
const HomeScreenLayout = ({ children }) => {

  const [isSideBarOpen, setSideBarIsOpen] = useState(false)

  const toggleSidebar = () => {
    setSideBarIsOpen(!isSideBarOpen)
  }

  return (
    <View className='home-screen-layout-container'>
      <View className='home-screen-layout-side-bar'>
        {children[0]}
      </View>
      <View className='home-screen-layout-container-content'>
        <View>
          {children[1]}
        </View>
        <View className='home-screen-layout-content'>
          {children[2]}
        </View>
      </View>
    </View>
  )
}

export default HomeScreenLayout
