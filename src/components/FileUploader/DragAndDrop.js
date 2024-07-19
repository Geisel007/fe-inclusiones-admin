// React
import React, { useState } from 'react'
// Components
import View from '../HtmlComponents/View/View'
import Input from '../HtmlComponents/Input/Input'
import Label from '../HtmlComponents/Label/Label'

// Styles
import './DragAndDrop.styles.css'

const DragAndDrop = () => {
  
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    setFile(droppedFile)
  }

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  const preventDefault = (e) => {
    e.preventDefault()
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <View
      className={`drag-and-drop-container ${isDragging ? 'dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={preventDefault}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <Input
        type="file"
        id="fileInput"
        accept=".jpg, .png, .jpeg, .pdf" // Puedes especificar los tipos de archivos permitidos
        onChange={handleFileInput}
        className='input-file'
      />
      <Label 
        htmlFor="fileInput"
        className='body3'
      >
        <View 
          className="drag-and-drop-content"
        >
          {file ? (
            <p>Archivo seleccionado: {file.name}</p>
          ) : (
            <p>Arrastra y suelta un archivo o haz clic aquí para seleccionar uno.</p>
          )}
        </View>
      </Label>
    </View>
  )
}

export default DragAndDrop
