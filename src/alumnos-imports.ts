

import { AlumnoService } from "services/alumno.service"
import { randomStudent, randomNumber } from "helpers/random"


for (let i = 3323; i < 100000; i++) {
    
    let alumno = randomStudent(i, randomNumber(1, 35))

    console.log(alumno)

    AlumnoService.create(alumno)
    
}