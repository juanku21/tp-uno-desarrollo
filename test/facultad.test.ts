


import { BaseServiceTest } from "./utils/base-test"
import { FacultadService } from "../src/services/facultad.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Facultad } from "@prisma/client"


class FacultadServiceTest extends BaseServiceTest 
<typeof prismaMock.facultad, Facultad, FacultadService, Prisma.FacultadCreateInput, Prisma.FacultadUpdateInput> {

    constructor(){
        super(prismaMock.facultad, FacultadService)
    }

    public async findById(mockFacultad : Facultad){

        this.mock.findUnique.mockResolvedValue(mockFacultad)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockFacultad)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const facultadTest = new FacultadServiceTest()


// mocks and input data

const mockFacultadArray : Facultad[] = [
    {
        facultad: 1,
        nombre: "FRSR"
    }
]

const mockFacultad : Facultad = {
    facultad: 1,
    nombre: "FRSR"
}

const inputCreate : Prisma.FacultadCreateInput = {
    facultad: 1,
    nombre: "FRSR"
}

const inputUpdate : Prisma.FacultadUpdateInput = {
    nombre: 'FRSR'
}




// tests


describe("Facultad service test", () => {

    test("Debería retornar una lista de facultad", async () => {

        await facultadTest.get(mockFacultadArray)

    })

    test("Debería retornar una facultad", async () => {

        await facultadTest.findById(mockFacultad)

    })

    test("Debería crear una facultad", async () => {

        await facultadTest.create(mockFacultad, inputCreate)

    })

    test("Debería actualizar una facultad", async () => {

        await facultadTest.update(mockFacultad, inputUpdate)

    })


    test("Debería borrar una facultad", async () => {

        await facultadTest.delete(mockFacultad)

    })


})