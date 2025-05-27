

import { BaseServiceTest } from "./utils/base-test"
import { LocalidadService } from "../src/services/localidad.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Localidad } from "@prisma/client"


class LocalidadServiceTest extends BaseServiceTest 
<typeof prismaMock.localidad, Localidad, LocalidadService, Prisma.LocalidadCreateInput, Prisma.LocalidadUpdateInput> {

    constructor(){
        super(prismaMock.localidad, LocalidadService)
    }

    public async findById(mockLocalidad : Localidad){

        this.mock.findUnique.mockResolvedValue(mockLocalidad)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockLocalidad)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const localidadTest = new LocalidadServiceTest()


// mocks and input data

const mockLocalidadArray : Localidad[] = [
    {
        codigo: 1,
        ciudad: "San Rafael",
        provincia: "Mendoza",
        pais_del_c: "Argentina"
    }
]

const mockLocalidad : Localidad = {
    codigo: 1,
    ciudad: "San Rafael",
    provincia: "Mendoza",
    pais_del_c: "Argentina"
}


const inputCreate: Prisma.LocalidadCreateInput = {
    codigo: 1,
    ciudad: "San Rafael",
    provincia: "Mendoza",
    pais_del_c: "Argentina"
}

const inputUpdate : Prisma.LocalidadUpdateInput = {
    ciudad: "Mendoza"
}




// tests


describe("Localidad service test", () => {

    test("Debería retornar una lista de localidades", async () => {

        await localidadTest.get(mockLocalidadArray)

    })

    test("Debería retornar una localidad", async () => {

        await localidadTest.findById(mockLocalidad)

    })

    test("Debería crear una localidad", async () => {

        await localidadTest.create(mockLocalidad, inputCreate)

    })

    test("Debería actualizar una localidad", async () => {

        await localidadTest.update(mockLocalidad, inputUpdate)

    })


    test("Debería eliminar una localidad", async () => {

        await localidadTest.delete(mockLocalidad)

    })


})