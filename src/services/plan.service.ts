
import { Prisma, Plan } from "@prisma/client"
import { PlanConRelaciones, InputPlan } from "types"
import { PlanRepository } from "../repositories/plan.repository"
import { MapperInputPlanToPrsima } from "../helpers/mappers"

const repository = new PlanRepository()

export class PlanService {

    public static async get() : Promise<Plan[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de planes ${error}`)
        }

    }

    public static async findById(id : number) : Promise<PlanConRelaciones | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener el plan ${error}`)
        }
    }

    public static async create(plan : InputPlan) : Promise<Plan> {
        try {
            const result = await repository.create(MapperInputPlanToPrsima.toPrismaCreate(plan))
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear el nuevo plan ${error}`)
        }
    }

    public static async update(id : number, plan : Prisma.PlanUpdateInput) : Promise<Plan> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El plan que desea actualizar no existe")
            }

            const result = await repository.update(id, plan)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar el plan ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Plan> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El plan que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar el plan ${error}`)
        }
    }

}