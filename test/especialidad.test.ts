

import { BaseServiceTest } from "./utils/base-test"
import { EspecialidadService } from "../src/services/especialidad.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Especialidad } from "@prisma/client"
import { EspecialidadConRelaciones } from "../src/types"


class EspecialidadServiceTest extends BaseServiceTest 
<typeof prismaMock.especialidad, Especialidad, EspecialidadService, Prisma.EspecialidadCreateInput, Prisma.EspecialidadUpdateInput> {

    constructor(){
        super(prismaMock.especialidad, EspecialidadService)
    }

    public async findById(mockEspecialidad : Especialidad){

        this.mock.findUnique.mockResolvedValue(mockEspecialidad)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockEspecialidad)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const especialidadTest = new EspecialidadServiceTest()


// mocks and input data

const mockEspecialidadArray : Especialidad[] = [
    {
        especialidad: 1,
        nombre: "Sistemas"
    }
]

const mockEspecialidad : Especialidad = {
    especialidad: 1,
    nombre: "Sistemas"
}

const mockEspecialidadConRelaciones : EspecialidadConRelaciones = {
    especialidad: 1,
    nombre: "Sistemas",
    materias: [
        {
            especialidad: 1,
            materia: 1,
            plan: 1,
            nombre: "Análisis Matemático I",
            ano: "2018"
        }
    ],
    orientaciones: [
        {
            especialidad: 1,
            orientacion: 1,
            plan: 1,
            nombre: "Ingeniería",

        }
    ],
    planes: [
        {
            plan: 1,
            especialidad: 1
        }
    ]

}


const inputCreate : Prisma.EspecialidadCreateInput = {
    especialidad: 1,
    nombre: "Sistemas"
}

const inputUpdate : Prisma.EspecialidadUpdateInput = {
    nombre: 'Sistemas'
}




// tests


describe("Especialidad service test", () => {

    test("Debería retornar una lista de especialidad", async () => {

        await especialidadTest.get(mockEspecialidadArray)

    })

    test("Debería retornar una especialidad con todas sus relaciones", async () => {

        await especialidadTest.findById(mockEspecialidadConRelaciones)

    })

    test("Debería crear una especialidad", async () => {

        await especialidadTest.create(mockEspecialidad, inputCreate)

    })

    test("Debería actualizar una especialidad", async () => {

        await especialidadTest.update(mockEspecialidad, inputUpdate)

    })


    test("Debería borrar una especialidad", async () => {

        await especialidadTest.delete(mockEspecialidad)

    })


})