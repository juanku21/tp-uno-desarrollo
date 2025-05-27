

import { BaseServiceTest } from "./utils/base-test"
import { UniversidadService } from "../src/services/universidad.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Universidad } from "@prisma/client"


class UniversidadServiceTest extends BaseServiceTest 
<typeof prismaMock.universidad, Universidad, UniversidadService, Prisma.UniversidadCreateInput, Prisma.UniversidadUpdateInput> {

    constructor(){
        super(prismaMock.universidad, UniversidadService)
    }

    public async findById(mockUniversidad : Universidad){

        this.mock.findUnique.mockResolvedValue(mockUniversidad)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockUniversidad)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const universidadTest = new UniversidadServiceTest()


// mocks and input data

const mockUniversidadArray : Universidad[] = [
    {
        universidad: 1,
        nombre: "Universidad Nacional de Buenos Aires"
    }
]

const mockUniversidad : Universidad = {
    universidad: 1,
    nombre: "Universidad Nacional de Buenos Aires"
}


const inputCreate: Prisma.UniversidadCreateInput = {
    universidad: 1,
    nombre: "Universidad Nacional de Buenos Aires"
}

const inputUpdate : Prisma.UniversidadUpdateInput = {
    nombre: "Universidad Nacional de Buenos Aires"
}




// tests


describe("Universidad service test", () => {

    test("Debería retornar una lista de universidades", async () => {

        await universidadTest.get(mockUniversidadArray)

    })

    test("Debería retornar una universidad", async () => {

        await universidadTest.findById(mockUniversidad)

    })

    test("Debería crear una universidad", async () => {

        await universidadTest.create(mockUniversidad, inputCreate)

    })

    test("Debería actualizar una universidad", async () => {

        await universidadTest.update(mockUniversidad, inputUpdate)

    })


    test("Debería eliminar una universidad", async () => {

        await universidadTest.delete(mockUniversidad)

    })


})