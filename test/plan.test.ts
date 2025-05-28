

import { BaseServiceTest } from "./utils/base-test"
import { PlanService } from "../src/services/plan.service"
import { prismaMock } from "../src/config/singleton"
import { Prisma, PrismaClient } from "@prisma/client"
import { Plan } from "@prisma/client"
import { PlanConRelaciones } from "../src/types"


class PlanServiceTest extends BaseServiceTest 
<typeof prismaMock.plan, Plan, PlanService, Prisma.PlanCreateInput, Prisma.PlanUpdateInput> {

    constructor(){
        super(prismaMock.plan, PlanService)
    }

    public async findById(mockPlan : Plan){

        this.mock.findUnique.mockResolvedValue(mockPlan)

        const result = await (this.service as any).findById(1)

        expect(result).toEqual(mockPlan)
        expect(this.mock.findUnique).toHaveBeenCalled()

    }

}

const planTest = new PlanServiceTest()


// mocks and input data

const mockPlanArray : Plan[] = [
    {
        plan: 2009,
        nombre: "Plan 2009"
    }
]

const mockPlanConRelaciones : PlanConRelaciones = {
    plan: 2009,
    nombre: "Plan 2009",
    
    materias: [
        {
            especialidad: 1,
            materia: 1,
            plan: 2009,
            nombre: "Física II",
            ano: 2
        }
    ],

    especialidades: [
        {
            especialidad: 1,
            plan: 2009
        }
    ],

    orientaciones: [
        {
            orientacion: 1,
            especialidad: 1,
            plan: 1,
            nombre: "Ingeniería"
        }
    ]

}

const mockPlan : Plan = {
    plan: 2009,
    nombre: "Plan 2009"
}


const inputCreate: Prisma.PlanCreateInput = {
    plan: 2009,
    nombre: "Plan 2009",

    especialidades: {
        create: [
            {
                especialidades: {
                    connect: {
                        especialidad: 1
                    }
                }
            }
        ]
    }
}

const inputUpdate : Prisma.PlanUpdateInput = {
    plan: 2018,
    nombre: "Plan 2018",

    especialidades: {
        create: [
            {
                especialidades: {
                    connect: {
                        especialidad: 2
                    }
                }
            }
        ]
    }
}




// tests


describe("Plan service test", () => {

    test("Debería retornar una lista de planes", async () => {

        await planTest.get(mockPlanArray)

    })

    test("Debería retornar un plan con sus relaciones", async () => {

        await planTest.findById(mockPlanConRelaciones)

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