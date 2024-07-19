// React
import React from 'react'
// Graph
import ReasonPieGraph from './ReasonPieGraph'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Pie } from 'react-chartjs-2'
// Components 
import View from '../../HtmlComponents/View/View'
import Span from '../../HtmlComponents/Span/Span'
// Global
import { classes } from '../../../global/HandleClassnames'
// Constants
import { CustomColors } from '../../../constants/CustomColors'

// Styles
import './PieGraph.style.css'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const PieGraph = ({
  dataSource,
  title,
  className
}) => {

  let total = 0
  const colors = []
  const totals = []
  const reasons = []

  dataSource.map((index) => {
    total += index.total
    return (
      colors.push(index.color),
      totals.push(index.total),
      reasons.push(index.reason)
    )
  })

  return (
    <View 
      className={classes(['general-container-pie-graph', className])}
    >
      <View 
        className='header-pie-graph'
      >
        <Span 
          className='subtitle1'
        >
          {title}
        </Span>
      </View>

      <View 
        className='container-pie-graph'
      >
        <View 
          className='container-pie-graph-total'
        >
          {/* Pie Graph */}
          <View 
            className='pie-graph'
          >
            <Pie
              data={{
                labels: reasons,
                display: false,
                datasets: [
                  {
                    data: totals,
                    borderColor: colors,
                    fill: true,
                    backgroundColor: colors
                  }
                ]
              }}
              responsive={true}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </View>
          <View 
            className='total'
          >
            <Span 
              className='subtitle2' 
              style={{ color: CustomColors.redTec }}
            >
              {total}
            </Span>
            {/*<br />*/}
            <Span 
              className='subtitle1' 
              style={{ color: CustomColors.redTec }}
            >
              TOTAL
            </Span>
          </View>
        </View>
        <View 
          className='container-reasons'
        >
          {/** Map Reasons */}
          {
            dataSource.map((element, index) => {
              return <ReasonPieGraph key={'reason' + index} element={element} />
            })
          }
        </View>
      </View>
    </View>
  )
}

export default PieGraph
