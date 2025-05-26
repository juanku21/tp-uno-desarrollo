
import { BaseServiceTest } from "./utils/base-test"
import { GradoService } from "../src/services/grado.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Grado } from "@prisma/client"


class GradoServiceTest extends BaseServiceTest 
<typeof prismaMock.grado, Grado, GradoService, Prisma.GradoCreateInput, Prisma.GradoUpdateInput> {

    constructor(){
        super(prismaMock.grado, GradoService)
    }

    public async findById(mockGrado : Grado){

        this.mock.findUnique.mockResolvedValue(mockGrado)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockGrado)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const gradoTest = new GradoServiceTest()


// mocks and input data

const mockGradoArray : Grado[] = [
    {
        grado: 1,
        nombre: "Director Escuela"
    }
]

const mockGrado : Grado = {
    grado: 1,
    nombre: "Director Escuela"
}


const inputCreate: Prisma.GradoCreateInput = {
    grado: 1,
    nombre: "Director Escuela"
}

const inputUpdate : Prisma.AlumnoUpdateInput = {
    nombre: "El que limpia"
}




// tests


describe("Grado service test", () => {

    test("Debería retornar una lista de grados", async () => {

        await gradoTest.get(mockGradoArray)

    })

    test("Debería retornar un grado", async () => {

        await gradoTest.findById(mockGrado)

    })

    test("Debería crear un grado", async () => {

        await gradoTest.create(mockGrado, inputCreate)

    })

    test("Debería actualizar un grado", async () => {

        await gradoTest.update(mockGrado, inputUpdate)

    })


    test("Debería eliminar un grado", async () => {

        await gradoTest.delete(mockGrado)

    })


})