
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
        apellido: "Damiani",
        nombre: "Macarena",
        numero_documento: 6983452,
        tipo_documento: "LibretaCivica",
        fecha_nacimiento: expect.any(Date),
        sexo: "F",
        numero_legajo: 10000,
        fecha_ingreso: expect.any(Date)
    }
]

const mockAlumno : Alumno = {
    alumno: 1,
    apellido: "Damiani",
    nombre: "Macarena",
    numero_documento: 6983452,
    tipo_documento: "LibretaCivica",
    fecha_nacimiento: expect.any(Date),
    sexo: "F",
    numero_legajo: 10000,
    fecha_ingreso: expect.any(Date)
}

const inputCreate: Prisma.AlumnoCreateInput = {
    apellido: "Damiani",
    nombre: "Macarena",
    numero_documento: 6983452,
    tipo_documento: "LibretaCivica",
    fecha_nacimiento: expect.any(Date),
    sexo: "F",
    numero_legajo: 10000,
    fecha_ingreso: expect.any(Date)
}

const inputUpdate : Prisma.AlumnoUpdateInput = {
    nombre: 'Macarinha'
}




// tests


describe("Alumno service test", () => {

    test("Debería retornar una lista de alumnnos", async () => {

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