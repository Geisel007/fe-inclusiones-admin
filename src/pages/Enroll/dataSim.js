export const data = {
  columns: [
    {
      header: 'Sede',
      accessorKey: 'campus',                                        
    }, 
    {
      header: 'Carnet',
      accessorKey: 'carnet',
    },
    {
      header: 'Estudiante',
      accessorKey: 'student',                                        
    },
    {
      header: 'Curso',
      accessorKey: 'course',                                        
    }, 
    {
      header: 'Grupo',
      accessorKey: 'grupo',                                        
    },  
    {
      header: 'Profesor(a)',
      accessorKey: 'teacher',                                        
    },  
    {
      header: 'Estado',
      accessorKey: 'status',                                        
    }                    
  ],
  pageSize: 20,
  records: [
    {
      campus: 'Cartago',
      carnet: '2020124953',
      student: 'Geisel Montoya',
      course: 'Criptografía',
      grupo: '01',
      teacher: 'Jorge Vargas',
      status: 'Aceptada'
    },
    {
      campus: 'Cartago',
      carnet: '2020124953',
      student: 'Geisel Montoya',
      course: 'Proyecto',
      grupo: '02',
      teacher: 'Alicia Salazar',
      status: 'Rechazada'
    },
    {
      campus: 'Alajuela',
      carnet: '2020124953',
      student: 'Geisel Montoya',
      course: 'Computación y Sociedad',
      grupo: '01',
      teacher: 'Jaime Solano',
      status: 'Pendiente'
    }                                                                                                                                                                                                                  
  ],
  detailEnrol: {
    student: 'Geisel Montoya Solano',
    email: 'montoyageisel@estudiantec.cr',
    carnet: '2020124953',
    condition: {
      requisites: true,
      coRequisites: true,
      rnCondition: false,
      scholarship: true
    },
    course: 'IC-8052 Criptografía',
    group: '01',
    schedule: 'M 19:00-20:50  V 19:00-20:50',
    modality: 'Semipresencial',
    teacher: 'Jorge Vargas',
    email: 'avargas@itcr.ac.cr',
    campus: 'Cartago',
    status: 'Pendiente'
  }
}
