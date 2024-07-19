// React
import React, { useState, useRef, useEffect } from 'react'
// Chart
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto' // don't delete even if not in use, it's necessary for chart.js to work
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { horizontalBarOptions } from './HorizontalBar.config'
// Constants
import { CustomColors } from '../../../constants/CustomColors'
import { Constants } from '../../../constants/Constants'
// Global
import { classes } from '../../../global/HandleClassnames'

// Styles
import './HorizontalBar.style.css'

const HorizontalBar = ({ data, className, title }) => {
  const chartConfiguration = horizontalBarOptions(title)
  const chartRef = useRef()
  const selectedDatasetIndex = useRef([])
  const [legendClicked, setLegendClicked] = useState(false)
  const [chartData, setChartData] = useState(
    {
      labels: [],
      datasets: Constants.horizontalBarLegendLabels.map(() => {
        return {
          label: 'Sin datos',
          data: [],
          backgroundColor: [CustomColors.text1],
          borderWidth: 0,
          borderRadius: 2,
          borderSkipped: false
        }
      })
    }
  )

  useEffect(() => {
    if (data) {
      const tempChartData = {
        labels: data.map((data) => data.label),
        datasets: Constants.horizontalBarLegendLabels.map(
          (datasetElement, index) => {
            return {
              id: index,
              label: datasetElement.text,
              data: data.map((data) => data[datasetElement.text]),
              backgroundColor: [datasetElement.backgroundColor],
              borderWidth: 0,
              borderRadius: 2,
              borderSkipped: false
            }
          }
        )
      }
      setChartData(tempChartData)
    }
  }, [data])

  const toggleData = (datasetID) => {
    const datasetVisible = chartRef.current.isDatasetVisible(datasetID)
    if (datasetVisible) {
      selectedDatasetIndex.current.push(datasetID)
      chartRef.current.hide(datasetID)
    } else {
      selectedDatasetIndex.current.pop(datasetID)
      chartRef.current.show(datasetID)
    }
    setLegendClicked(!legendClicked)
  }

  const barPositionCustomPlugin = {
    id: 'barPosition',
    beforeDatasetsDraw (chart, _args, _pluginOptions) {
      chartData.datasets.forEach((_element, index) => {
        chart.getDatasetMeta(index).data.forEach((datapoint, _index) => {
          datapoint.base = chart.chartArea.left + 8
        })
      })
    }
  }

  return (
    <div className={classes(['container', className])}>
      <div className='chart'>
        <Bar
          options={chartConfiguration}
          data={chartData}
          ref={chartRef}
          plugins={[ChartDataLabels, barPositionCustomPlugin]}
        />
      </div>
      <div className='legend'>
        {
          chartData.datasets.map((element, index) => {
            return (
              <button
                key={'legend ' + index}
                className='option'
                onClick={() => toggleData(element.id)}
              >
                <div className='box' style={{ backgroundColor: element.backgroundColor[0] }} />
                <span
                  className={classes(['description4', 'text', selectedDatasetIndex.current.includes(element.id) ? 'selected' : null])}
                >
                  {element.label}
                </span>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default HorizontalBar
