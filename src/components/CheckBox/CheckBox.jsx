// React
import React, { forwardRef } from 'react'
// Utils
import { classes } from '../../global/HandleClassnames'
// Components 
import Input from '../HtmlComponents/Input/Input'
import View from '../HtmlComponents/View/View'

// Styles
import './CheckBox.styles.css'

/**
A reusable component for displaying an input field with custom styles.
@param {string} props.type - The type of input check box.
@param {React.RefObject} props.inputField - A reference object to the input field.
@returns {JSX.Element} - A React JSX element representing the input field.
*/
const CheckBox = forwardRef(
  ({
    className,
    value,
    children
  }, ref) => {

    return (
      <View
        className={'input-chekbox'}
      >
        <Input
          type={'checkbox'}
          ref={ref}
          className={classes([className])}
          checked={value}
        />
        {children}
      </View>
      
    )
  }
)

export default CheckBox
