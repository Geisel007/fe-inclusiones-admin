// React
import React, { useState } from 'react'
// Components
import View from '../HtmlComponents/View/View'
import Li from '../HtmlComponents/Li/Li'
import Ul from '../HtmlComponents/Ul/Ul'

// Styles
import './DropDown.styles.css'

const Dropdown = ({
  title,
  options = [],
  selectedOption,
  setSelectedOption
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (index) => {
    setSelectedOption(index)
    setIsOpen(false)
  }

  return (
    <View 
      className='dropdown'
    >
      <View 
        className={`dropdown-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleDropdown}
      >
        {options[selectedOption] || title}
      </View>
      {isOpen && (
        <Ul className='dropdown-options'>
          {options.map((option, index) => (
            <Li key={option} onClick={() => handleOptionClick(index)}>
              {option}
            </Li>
          ))}
        </Ul>
      )}
    </View>
  )
}

export default Dropdown
