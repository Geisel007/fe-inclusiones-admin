// React
import React, { useState, useEffect } from 'react'
// Components 
import View from '../../components/HtmlComponents/View/View'
import DropDown from '../../components/DropDown/DropDown'
import HorizontalBar from '../../components/Charts/HorizontalBar/HorizontalBar'
import PieGraph from '../../components/Charts/PieGraph/PieGraph'
// Constants
import { CustomColors } from '../../constants/CustomColors'
import { Constants } from '../../constants/Constants'
// Data
import getChartData from './HorizontalBar.sim'

//Styles
import './Home.styles.css'

/**
The Home page component displays the home page of the application
@param {Object} props - The component's properties.
@returns {JSX.Element} - The rendered component.
*/
const Home = ({}) => {

  const [selectedGraph, setSelectedGraph] = useState(0)

  /** example horizontal bar */
  const dataSource = [{
    reason: 'Razón 1',
    total: 105,
    color: CustomColors.text2
  },{
    reason: 'Razón 2',
    total: 205,
    color: CustomColors.redTec
  },{
    reason: 'Razón 3',
    total: 195,
    color: CustomColors.blueTec
  }]
  /**********************************************************************/

  /** example pie graph */
  const [charData, setCharData] = useState()

  // Simulation code
  const handleDataPromise = async (dataPromise) => {
    try {
      const data = await dataPromise.promise
      setCharData(data)
    } catch (e) {
      console.e('Error getting Charts data')
    }
  }

  // Simulation code
  useEffect(() => {
    const dataPromise = getChartData()
    handleDataPromise(dataPromise)
    return () => { dataPromise.cancel() }
  }, [])
  /**********************************************************************/

  const goToGraph = (graph) => {
    switch (graph) {
      case 0:
        return (
          <PieGraph
            dataSource={dataSource}
            title={'INCLUSIONES TOTALES'}
            className='chart-container'
          />
        )
      case 1:
        return (
          <HorizontalBar
            data={charData}
            className='chart-container'
            title={'INCLUSIONES POR CURSO'}
          />
        )
    }
  }

  return (
    <View 
      className='home-container'
    >
      <DropDown 
        title={'Seleccione un tipo de gráfico'}
        options={Constants.typeGraphs}
        selectedOption={selectedGraph}
        setSelectedOption={setSelectedGraph}
      />
      <View
        className='container-graph'
      >
        {goToGraph(selectedGraph)}
      </View>
    </View>
  )
}

export default Home
