

import { BaseServiceTest } from "./utils/base-test"
import { OrientacionService } from "../src/services/orientacion.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Orientacion } from "@prisma/client"


class OrientacionServiceTest extends BaseServiceTest 
<typeof prismaMock.orientacion, Orientacion, OrientacionService, Prisma.OrientacionCreateInput, Prisma.OrientacionUpdateInput> {

    constructor(){
        super(prismaMock.orientacion, OrientacionService)
    }

    public async findById(mockOrientacion : Orientacion){

        this.mock.findUnique.mockResolvedValue(mockOrientacion)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockOrientacion)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const orientacionTest = new OrientacionServiceTest()


// mocks and input data

const mockOrientacionArray : Orientacion[] = [
    {
        orientacion: 1,
        especialidad: 1,
        plan: 1,
        nombre: "Ingeniería"
    }
]

const mockOrientacion : Orientacion = {
    orientacion: 1,
    especialidad: 1,
    plan: 1,
    nombre: "Ingeniería"
}


const inputCreate: Prisma.OrientacionCreateInput = {
    orientacion: 1,  
    nombre: "ingeniería",

    planes: {
        connect: {
            plan: 1
        }
    },

    especialidades: {
        connect: {
            especialidad: 1
        }
    }
}

const inputUpdate : Prisma.AlumnoUpdateInput = {
    nombre: "Bachillerato",
}




// tests


describe("Orientacion service test", () => {

    test("Debería retornar una lista de orientaciones", async () => {

        await orientacionTest.get(mockOrientacionArray)

    })

    test("Debería retornar una orientacion", async () => {

        await orientacionTest.findById(mockOrientacion)

    })

    test("Debería crear una orientacion", async () => {

        await orientacionTest.create(mockOrientacion, inputCreate)

    })

    test("Debería actualizar una orientacion", async () => {

        await orientacionTest.update(mockOrientacion, inputUpdate)

    })


    test("Debería eliminar una orientacion", async () => {

        await orientacionTest.delete(mockOrientacion)

    })


})