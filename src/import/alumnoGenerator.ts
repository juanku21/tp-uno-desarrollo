

import { faker } from "@faker-js/faker"

export const alumnoGenerator = (cantidad : number) => {

    let alumnos : any = []

    for (let i = 1; i < cantidad + 1; i++) {
    
        let alumno = {
            apellido: faker.person.lastName(),
            nombre: faker.person.firstName(),
            numero_documento: i,
            tipo_documento: 'Pasaporte',
            fecha_nacimiento: new Date().toISOString(),
            sexo: 'M',
            numero_legajo: i,
            fecha_ingreso: new Date().toISOString()
        }

        alumnos.push(alumno)
    }

    return alumnos
    
}

