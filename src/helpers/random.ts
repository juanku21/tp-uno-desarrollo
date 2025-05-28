

import { faker } from "@faker-js/faker"

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomStudent = (id : number, facultad : number) => {
    const stundent = {
        alumno: id,
        nombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        facultad_id: facultad
    }

    return stundent
}