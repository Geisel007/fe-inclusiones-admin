// React
import React from 'react'
// Components
import View from '../../../../components/HtmlComponents/View/View'
import Table from '../../../../components/HtmlComponents/Table/Table'
import HeaderCell from '../../../../components/HtmlComponents/HeaderCell/HeaderCell'
import Cell from '../../../../components/HtmlComponents/Cell/Cell'
import Row from '../../../../components/HtmlComponents/Row/Row'
import Thead from '../../../../components/HtmlComponents/Thead/Thead'
import Tbody from '../../../../components/HtmlComponents/Tbody/Tbody'

// Styles
import './Preview.styles.css'

const Preview = ({
  data
  }) => {
  return (
    <View
      className='table-container'
    >
      {
        data.map((course, index) => {
          return (
            <Table
              key={index}
              className='table-preview'
            >
              <Thead>
                <Row>
                  <HeaderCell className='th-table-preview'>SEDE</HeaderCell>
                  <HeaderCell className='th-table-preview'>{course.campus}</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='4'>{course.year}</HeaderCell>
                </Row>
                <Row>
                  <HeaderCell className='th-table-preview'>Código</HeaderCell>
                  <HeaderCell className='th-table-preview'>Descripción</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='2'>Período</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='2'></HeaderCell>
                </Row>
                <Row>
                  <HeaderCell className='th-table-preview'>{course.codCourse}</HeaderCell>
                  <HeaderCell className='th-table-preview'>{course.course}</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='2'>{course.period}</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='2'></HeaderCell>
                </Row>
                <Row>
                  <HeaderCell className='th-table-preview'>Grupo</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='6'>{course.group}</HeaderCell>
                </Row>
                <Row>
                  <HeaderCell className='th-table-preview'>Profesor</HeaderCell>
                  <HeaderCell className='th-table-preview'>{course.teacher}</HeaderCell>
                  <HeaderCell className='th-table-preview' colSpan='4'>Se autoriza la inclusión con</HeaderCell>
                </Row>
                <Row>
                  <HeaderCell className='th-table-preview'>Carné</HeaderCell>
                  <HeaderCell className='th-table-preview'>Nombre del estudiante</HeaderCell>
                  <HeaderCell className='th-table-preview'>RN</HeaderCell>
                  <HeaderCell className='th-table-preview'>LR</HeaderCell>
                  <HeaderCell className='th-table-preview'>LC</HeaderCell>
                  <HeaderCell className='th-table-preview'>CH</HeaderCell>
                </Row>
              </Thead>
              <Tbody>
                {
                  course.students.map((student, index) => (
                    <Row key={index}>
                      <Cell className='td-table-preview'>{student.carnet}</Cell>
                      <Cell className='td-table-preview'>{student.lastName} {student.name}</Cell>
                      <Cell className='td-table-preview'>{student.RN ? 'x' : ''}</Cell>
                      <Cell className='td-table-preview'>{student.LR ? 'x' : ''}</Cell>
                      <Cell className='td-table-preview'>{student.LC ? 'x' : ''}</Cell>
                      <Cell className='td-table-preview'>{student.CH ? 'x' : ''}</Cell>
                    </Row>
                  ))
                }
              </Tbody>
            </Table>
          )
        })
      }
    </View>
  )
}

export default Preview
