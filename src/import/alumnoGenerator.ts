

import { faker } from "@faker-js/faker"
import { randomNumber } from "../helpers/random"
import { Prisma } from "@prisma/client"

export const alumnoGenerator = (cantidad : number) => {

    let alumnos : any = []

    // const tiposDocumentos : string[] = ["LibretaCivica", "Pasaporte", "LibretaEnrolamiento"]
    // const sexos : string[] = ["M", "F"]

    for (let i = 1; i < cantidad + 1; i++) {
    
        let alumno : Prisma.AlumnoCreateInput = {
            apellido: faker.person.lastName(),
            nombre: faker.person.firstName(),
            numero_documento: i,
            tipo_documento: 'Pasaporte',
            fecha_nacimiento: faker.date.birthdate(),
            sexo: 'M',
            numero_legajo: i,
            fecha_ingreso: faker.date.birthdate()
        }

        alumnos.push(alumno)
    }

    return alumnos
    
}

