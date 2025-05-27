

import { BaseServiceTest } from "./utils/base-test"
import { PaisService } from "../src/services/pais.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Pais } from "@prisma/client"


class PaisServiceTest extends BaseServiceTest 
<typeof prismaMock.pais, Pais, PaisService, Prisma.PaisCreateInput, Prisma.PaisUpdateInput> {

    constructor(){
        super(prismaMock.pais, PaisService)
    }

    public async findById(mockPais : Pais){

        this.mock.findUnique.mockResolvedValue(mockPais)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockPais)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const paisTest = new PaisServiceTest()


// mocks and input data

const mockPaisArray : Pais[] = [
    {
        pais: 1,
        nombre: "Argentina"
    }
]

const mockPais : Pais = {
    pais: 1,
    nombre: "Argentina"
}


const inputCreate: Prisma.PaisCreateInput = {
    pais: 1,
    nombre: "Argentina"
}

const inputUpdate : Prisma.AlumnoUpdateInput = {
    nombre: "Chile"
}




// tests


describe("Pais service test", () => {

    test("Debería retornar una lista de paises", async () => {

        await paisTest.get(mockPaisArray)

    })

    test("Debería retornar un pais", async () => {

        await paisTest.findById(mockPais)

    })

    test("Debería crear un pais", async () => {

        await paisTest.create(mockPais, inputCreate)

    })

    test("Debería actualizar un pais", async () => {

        await paisTest.update(mockPais, inputUpdate)

    })


    test("Debería eliminar un pais", async () => {

        await paisTest.delete(mockPais)

    })


})