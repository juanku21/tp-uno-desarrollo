

import { AlumnoService } from "../services/alumno.service"
import { randomStudent, randomNumber } from "../helpers/random"
import { FacultadService } from "../services/facultad.service"


export const alumnoGenerator = async (cantidad : number) => {

    const faculties = await FacultadService.get()
    const students = await AlumnoService.get()

    let lastFacultyId : number
    let lastStudentId : number

    students.length !== 0 ? lastStudentId = students[0].alumno : lastStudentId = 0
    faculties.length !== 0 ? lastFacultyId = faculties[0].facultad : lastFacultyId = 0

    for (let i = (lastStudentId + 1); i < (lastStudentId + cantidad); i++) {
    
        let alumno = randomStudent(i, randomNumber(1, lastFacultyId))

        console.log(alumno)

        await AlumnoService.create(alumno)
    
    }

}


