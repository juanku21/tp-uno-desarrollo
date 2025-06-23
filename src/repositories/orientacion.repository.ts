
import { Prisma, Orientacion } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class OrientacionRepository extends BaseRepository 
<typeof prisma.orientacion, Orientacion, Prisma.OrientacionCreateInput, Prisma.OrientacionUpdateInput> {

    constructor(){
        super(prisma.orientacion)
    }

    public async getById(id : Prisma.OrientacionWhereUniqueInput) : Promise<Orientacion | null> {
        try {
            const result = await prisma.orientacion.findUnique({
                where: {
                    plan_especialidad_orientacion: id.plan_especialidad_orientacion

                    // plan_especialidad orientacion
                    // {plan: number, especialidad: number, orientacion: number}
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

    
    public async update(id: Prisma.OrientacionWhereUniqueInput, data : Prisma.OrientacionUpdateInput) : Promise<Orientacion> {
        try {
            const result = await prisma.orientacion.update({
                where: {
                    plan_especialidad_orientacion: id.plan_especialidad_orientacion
                },
                data: data
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al escribir la base de datos: ${error}`)
        }
    }


    public async delete(id : Prisma.OrientacionWhereUniqueInput) : Promise<Orientacion> {
        try {
            const result = await prisma.orientacion.delete({
                where: {
                    plan_especialidad_orientacion: id.plan_especialidad_orientacion
                }
            })

            return result
        }
        catch (error : any) {
            throw new Error(`Error al escribir la base de datos: ${error}`)
        }
    }

}