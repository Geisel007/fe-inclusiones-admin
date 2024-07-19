// React
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
// Layout
import HomeScreenLayout from '../../layouts/homeScreenLayout'
// Components
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
// Constants
import { SideBarOptions } from '../../constants/SideBarOptions'

/**
Defines a functional component called `HomeSreenController`. It
imports the `React` library and the `Outlet` component from the `react-router-dom` library. It also
imports the `HomeScreenLayout`, `SideBar`, and `Header` components from their respective files
@typedef {Object} HomeScreenControllerProps
@property {Props} [props] - Props for the HomeScreenController component.
@param {HomeScreenControllerProps} props - Props for the HomeScreenController component.
@returns {JSX.Element} - HomeSreenController component.
*/
const HomeSreenController = ({ }) => {

  const [selectedOption, setSelectedOption] = useState(SideBarOptions[0]?.text)

  return(
    <HomeScreenLayout>
      <SideBar
        setSelectedOption={setSelectedOption}
      />
      <Header
        selectedOption={selectedOption}
      />
      <Outlet/>      
    </HomeScreenLayout>
  )

}

export default HomeSreenController
