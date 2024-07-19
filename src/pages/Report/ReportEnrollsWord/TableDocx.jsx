// Constants
import { Constants } from '../../../constants/Constants'
// Docx
import { 
  AlignmentType,
  Paragraph, 
  Table, 
  TableCell, 
  TableRow, 
  TextRun, 
  WidthType
} from 'docx'

const getStudents = async(data) => {
  return data.students.map(student => {
    return (
      new TableRow({
        width: {
          size: 100,
          type: WidthType.PERCENTAGE
        },
        children: [
          new TableCell({
            margins: Constants.adminReportWord.marginTableCell,
            width: {
              size: 15,
              type: WidthType.PERCENTAGE
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: student.carnet,
                    font: 'Calibri',
                    size: '11pt'
                })]
              })
            ]
          }),
          new TableCell({
            margins: Constants.adminReportWord.marginTableCell,
            width: {
              size: 35,
              type: WidthType.PERCENTAGE
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: student.lastName + ' ' + student.name,
                    font: 'Calibri',
                    size: '11pt'
                })]
              })
            ]
          }),
          new TableCell({
            margins: Constants.adminReportWord.marginTableCell,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: student.RN ? 'x' : '',
                    bold: true,
                    font: 'Calibri',
                    size: '11pt'
                })]
              })
            ]
          }),
          new TableCell({
            margins: Constants.adminReportWord.marginTableCell,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: student.LR ? 'x' : '',
                    bold: true,
                    font: 'Calibri',
                    size: '11pt'
                })]
              })
            ]
          }),
          new TableCell({
            margins: Constants.adminReportWord.marginTableCell,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: student.LC ? 'x' : '',
                    bold: true,
                    font: 'Calibri',
                    size: '11pt'
                })]
              })
            ]
          }),
          new TableCell({
            margins: Constants.adminReportWord.marginTableCell,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: student.CH ? 'x' : '',
                    bold: true,
                    font: 'Calibri',
                    size: '11pt'
                })]
              })
            ]
          })
        ]
      })
    )
  })
}

export const TableDocx = async (data) => {
  console.log('data:', data)
  return new Table({
      width: Constants.adminReportWord.widthTable,
      rows: [
        new TableRow({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE
          },
          children: [
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'SEDE',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 35,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: data.campus,
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 4,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: data.year,
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            })
          ]
        }),
        new TableRow({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE
          },
          cantSplit: true,
          children: [
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Código',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 35,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Descripción',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 2,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'Período',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 2,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: '',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            })
          ]
        }),
        new TableRow({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE
          },
          cantSplit: true,
          children: [
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: data.codCourse,
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 35,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: data.course,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 2,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: data.period,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 2,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: '',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            })
          ]
        }),
        new TableRow({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE
          },
          cantSplit: true,
          children: [
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Grupo',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 6,
              width: {
                size: 35,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: data.group,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            })
          ]
        }),
        new TableRow({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE
          },
          children: [
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Profesor',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 35,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: data.teacher,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              columnSpan: 4,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'Se autoriza la inclusión con',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            })
          ]
        }),
        new TableRow({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE
          },
          children: [
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Carné',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              width: {
                size: 35,
                type: WidthType.PERCENTAGE
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Nombre del estudiante',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'RN',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'LR',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'LC',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            }),
            new TableCell({
              margins: Constants.adminReportWord.marginTableCell,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'CH',
                      bold: true,
                      font: 'Calibri',
                      size: '11pt'
                  })]
                })
              ]
            })
          ]
        }),
        ...await getStudents(data)
      ]
    })
} 


              

