import { CustomColors } from '../../../constants/CustomColors'

export const horizontalBarOptions = (title) => {
  return {
    layout: {
      padding: {
        left: 16,
        right: 30
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          tickColor: 'black',
          tickLength: 6,
          color: '#CCCCCC',
          borderColor: 'black'
        },
        border: {
          color: '#FFFFF',
          display: true
        },
        ticks: {
          font: {
            family: 'Montserrat-Medium',
            size: 14,
            weight: 400
          },
          color: 'black'
        }
      },
      y: {
        afterFit (scale) {
          scale.width = 162
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false
        },
        ticks: {
          padding: 8,
          font: {
            family: 'Montserrat-Regular',
            size: 14,
            weight: 600
          }
        }
      }
    },
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      datalabels: {
        align: 'right',
        anchor: 'end',
        color: CustomColors.text2,
        font: {
          family: 'Montserrat-Medium',
          size: 14
        }
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            family: 'Montserrat-Medium'
          },
          useBorderRadius: true,
          borderRadius: 20,
          boxWidth: 17,
          boxHeight: 17,
          color: CustomColors.text2
        }
      },
      title: {
        display: true,
        align: 'start',
        color: CustomColors.text2,
        font: {
          family: 'Montserrat-Bold',
          size: 16,
          weight: 700
        },
        text: title,
        padding: {
          bottom: 30,
          top: 16
        }
      },
      tooltip: {
        callbacks: {
          title: (context) => (context[0].label.replaceAll(',', ' '))
        }
      }
    }
  }
}
