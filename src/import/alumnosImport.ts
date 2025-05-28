

import { AlumnoService } from "../services/alumno.service"
import { randomStudent, randomNumber } from "../helpers/random"
import { FacultadService } from "../services/facultad.service"


export const alumnoGenerator = async (cantidad : number) => {

    const faculties = await FacultadService.get()
    const students = await AlumnoService.get()
    const lastFacultyId = faculties[faculties.length - 1].facultad
    let lastStudentId

    if (students.length) {
        lastStudentId = students[students.length -1].alumno
    }
    else {
        lastStudentId = 0
    }

    for (let i = lastStudentId + 1; i < cantidad; i++) {
    
        let alumno = randomStudent(i, randomNumber(1, lastFacultyId))

        console.log(alumno)

        await AlumnoService.create(alumno)
    
    }

}


