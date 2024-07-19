import { makeCancelable } from './../../global/makeCancelable'

const data = [
  {
    label: 'Criptografía',
    Aprobadas: 7,
    Rechazadas: 8,
    Pendientes: 8
  },
  {
    label: ['Proyecto de', 'Ingeniería de', 'Software'], // use array to wrap text manually
    Aprobadas: 53,
    Rechazadas: 53,
    Pendientes: 13
  },
  {
    label: ['Computación ', 'y Sociedad'],
    Aprobadas: 63,
    Rechazadas: 87,
    Pendientes: 22
  }
]

const getChartData = () => {
  return makeCancelable(
    new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(data)
      }, 333)
    })
  )
}

export default getChartData
