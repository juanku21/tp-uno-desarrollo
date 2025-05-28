

import { AlumnoService } from "../services/alumno.service"
import { randomStudent, randomNumber } from "../helpers/random"
import { FacultadService } from "../services/facultad.service"


export const alumnoGenerator = async (cantidad : number) => {

    const lastFacultyId = await FacultadService.get()[-1].facultad
    const lastStudentId = await AlumnoService.get()[-1].alumno

    for (let i = lastStudentId + 1; i < cantidad; i++) {
    
        let alumno = randomStudent(i, randomNumber(1, lastFacultyId))

        console.log(alumno)

        await AlumnoService.create(alumno)
    
    }

}


