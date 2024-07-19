import { CustomColors } from './CustomColors'
import { convertInchesToTwip, WidthType } from 'docx'

export const Constants = {
  horizontalBarLegendLabels: [
    {
      text: 'Aprobadas',
      backgroundColor: CustomColors.blueTec
    },
    {
      text: 'Rechazadas',
      backgroundColor: CustomColors.redTec
    },
    {
      text: 'Pendientes',
      backgroundColor: CustomColors.gray
    },
  ],
  typeGraphs: [
    'Inclusiones totales',
    'Inclusiones por curso'
  ],
  typeReports: [
    'Reporte Admisión y Registro',
    'Reporte en Gráficos'
  ],
  adminReportWord: {
    marginTableCell: {
      top: convertInchesToTwip(0.02),
      bottom: convertInchesToTwip(0.02),
      left: convertInchesToTwip(0.03),
      right: convertInchesToTwip(0.03),
    },
    widthTable: {
      size: 100,
      type: WidthType.PERCENTAGE
    }
  }
}
