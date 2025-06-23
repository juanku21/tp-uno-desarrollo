

import { BaseServiceTest } from "./utils/base-test"
import { PlanService } from "../src/services/plan.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { PlanEspecialidad } from "@prisma/client"


class PlanServiceTest extends BaseServiceTest 
<typeof prismaMock.planEspecialidad, PlanEspecialidad, PlanService, Prisma.PlanEspecialidadCreateInput, Prisma.PlanEspecialidadUpdateInput> {

    constructor(){
        super(prismaMock.planEspecialidad, PlanService)
    }

    public async findById(mockPlan : PlanEspecialidad){

        this.mock.findUnique.mockResolvedValue(mockPlan)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockPlan)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const planTest = new PlanServiceTest()


// mocks and input data

const mockPlanArray : PlanEspecialidad[] = [
    {
        especialidad: 1,
        plan: 2009
    }
]


const mockPlan : PlanEspecialidad = {
    especialidad: 1,
    plan: 2009,
}


const inputCreate: Prisma.PlanEspecialidadCreateInput = {

    planes: {
        connectOrCreate: {
            where: {
                plan: 2009
            },
            create: {
                plan: 2009,
                nombre: "Plan 2009"
            }
        }
    },

    especialidades: {
        connect: {
            especialidad: 1
        }
    }
}

const inputUpdate : Prisma.PlanEspecialidadUpdateInput = {

    planes: {
        connectOrCreate: {
            where: {
                plan: 2009
            },
            create: {
                plan: 2009,
                nombre: "Plan 2009"
            }
        }
    }
}




// tests


describe("Plan service test", () => {

    test("Debería retornar una lista de planes", async () => {

        await planTest.get(mockPlanArray)

    })

    test("Debería retornar un plan", async () => {

        await planTest.findById(mockPlan)

    })

    test("Debería crear un plan", async () => {

        await planTest.create(mockPlan, inputCreate)

    })

    test("Debería actualizar un plan", async () => {

        await planTest.update(mockPlan, inputUpdate)

    })


    test("Debería eliminar un plan", async () => {

        await planTest.delete(mockPlan)

    })


})