
import { BaseServiceTest } from "./utils/base-test"
import { MateriaService } from "../src/services/materia.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Materia } from "@prisma/client"


class MateriaServiceTest extends BaseServiceTest 
<typeof prismaMock.materia, Materia, MateriaService, Prisma.MateriaCreateInput, Prisma.MateriaUpdateInput> {

    constructor(){
        super(prismaMock.materia, MateriaService)
    }

    public async findById(mockMateria : Materia){

        this.mock.findUnique.mockResolvedValue(mockMateria)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockMateria)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const materiaTest = new MateriaServiceTest()


// mocks and input data

const mockMateriaArray : Materia[] = [
    {
        materia: 1,
        nombre: "Algebra Lineal I",
        ano: "1",
        especialidad: 1,
        plan: 2009
    }
]

const mockMateria : Materia = {
    materia: 1,
    nombre: "Algebra Lineal I",
    ano: "1",
    especialidad: 1,
    plan: 2009
}


const inputCreate: Prisma.MateriaCreateInput = {
    materia: 1,  
    nombre: "Análisis 1",
    ano: "3",

    planes: {
        connect: {
            plan: 2009
        }
    },

    especialidades: {
        connect: {
            especialidad: 1
        }
    }
}

const inputUpdate : Prisma.MateriaUpdateInput = {
    nombre: "Análisis de Sistemas",
    ano: "2"
}




// tests


describe("Materia service test", () => {

    test("Debería retornar una lista de materias", async () => {

        await materiaTest.get(mockMateriaArray)

    })

    test("Debería retornar una materia", async () => {

        await materiaTest.findById(mockMateria)

    })

    test("Debería crear una materia", async () => {

        await materiaTest.create(mockMateria, inputCreate)

    })

    test("Debería actualizar una materia", async () => {

        await materiaTest.update(mockMateria, inputUpdate)

    })


    test("Debería eliminar una materia", async () => {

        await materiaTest.delete(mockMateria)

    })


})