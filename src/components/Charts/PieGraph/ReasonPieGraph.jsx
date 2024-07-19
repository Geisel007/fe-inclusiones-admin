// React
import React from 'react'
// Components
import View from '../../HtmlComponents/View/View'
import Span from '../../HtmlComponents/Span/Span'

// Styles
import './ReasonPieGraph.style.css'

const ReasonPieGraph = ({ element }) => {
  return (
    <View 
      className='container-reason'
    >
      <View
        className='bar-reason'
        style={{ backgroundColor: element.color }}
      />
      <Span 
        className='subtitle2 title'
      >
        {element.total}
      </Span>
      <Span 
        className='subtitle2'
      >
        {element.reason}
      </Span>
    </View>
  )
}

export default ReasonPieGraph
