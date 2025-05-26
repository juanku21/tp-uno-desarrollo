
import { Prisma, Especialidad } from "@prisma/client"
import { EspecialidadConRelaciones } from "../types"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class EspecialidadRepository extends BaseRepository 
<typeof prisma.especialidad, Especialidad, Prisma.EspecialidadCreateInput, Prisma.EspecialidadUpdateInput> {

    constructor(){
        super(prisma.especialidad)
    }

    public async getById(id : number) : Promise<EspecialidadConRelaciones | null> {
        try {
            const result = await prisma.especialidad.findUnique({
                where: {
                    especialidad: id 
                },
                include:{
                    orientaciones: true,
                    materias: true,
                    planes: true
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}