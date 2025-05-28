
import { Prisma, PlanEspecialidad } from "@prisma/client"
import { PlanConRelaciones } from "../types"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class PlanRepository extends BaseRepository 
<typeof prisma.planEspecialidad, PlanEspecialidad, Prisma.PlanEspecialidadCreateInput, Prisma.PlanEspecialidadUpdateInput> {

    constructor(){
        super(prisma.planEspecialidad)
    }

    public async getById(id : Prisma.PlanEspecialidadWhereUniqueInput) : Promise<PlanEspecialidad | null> {
        try {
            const result = await prisma.planEspecialidad.findUnique({
                where: {
                    plan_especialidad: id.plan_especialidad
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}