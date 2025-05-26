
import { BaseServiceTest } from "./utils/base-test"
import { AlumnoService } from "../src/services/alumno.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Alumno } from "@prisma/client"


class AlumnoServiceTest extends BaseServiceTest 
<typeof prismaMock.alumno, Alumno, AlumnoService, Prisma.AlumnoCreateInput, Prisma.AlumnoUpdateInput> {

    constructor(){
        super(prismaMock.alumno, AlumnoService)
    }

    public async findById(mockAlumno : Alumno){

        this.mock.findUnique.mockResolvedValue(mockAlumno)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockAlumno)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const alumnoTest = new AlumnoServiceTest()


// mocks and input data

const mockAlumnoArray : Alumno[] = [
    {
        alumno: 1,
        nombre: "Macarena",
        apellido: "Damiani",
        facultad_id: 5
    }
]

const mockAlumno : Alumno = {
    alumno: 1,
    nombre: "Macarena",
    apellido: "Damiani",
    facultad_id: 5
}


const inputCreate: Prisma.AlumnoCreateInput = {
    alumno: 1,  
    nombre: "Macarena",
    apellido: "Damiani",
    facultad: {
        connect: {
            facultad: 5  
        }
    }
}

const inputUpdate : Prisma.AlumnoUpdateInput = {
    nombre: 'Macarinha'
}




// tests


describe("Alumno service test", () => {

    test("Debería retornar un alumno con todas sus relaciones", async () => {

        await alumnoTest.get(mockAlumnoArray)

    })

    test("Debería retornar un alumno", async () => {

        await alumnoTest.findById(mockAlumno)

    })

    test("Debería crear un alumno", async () => {

        await alumnoTest.create(mockAlumno, inputCreate)

    })

    test("Debería actualizar un alumno", async () => {

        await alumnoTest.update(mockAlumno, inputUpdate)

    })


    test("Debería eliminar un alumno", async () => {

        await alumnoTest.delete(mockAlumno)

    })


})