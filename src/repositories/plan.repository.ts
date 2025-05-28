
import { Prisma, Plan } from "@prisma/client"
import { PlanConRelaciones } from "../types"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class PlanRepository extends BaseRepository 
<typeof prisma.plan, Plan, Prisma.PlanCreateInput, Prisma.PlanUpdateInput> {

    constructor(){
        super(prisma.plan)
    }

    public async getById(id : number) : Promise<PlanConRelaciones | null> {
        try {
            const result = await prisma.plan.findUnique({
                where: {
                    plan: id 
                },
                include:{
                    materias: true,
                    especialidades: true,
                    orientaciones: true
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}