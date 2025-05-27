import { Prisma, Facultad } from "@prisma/client"
import { FacultadConRelaciones } from "../types"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class FacultadRepository extends BaseRepository 
<typeof prisma.facultad, Facultad, Prisma.FacultadCreateInput, Prisma.FacultadUpdateInput> {

    constructor(){
        super(prisma.facultad)
    }

    public async getById(id : number) : Promise<FacultadConRelaciones | null> {
        try {
            const result = await prisma.facultad.findUnique({
                where: {
                    facultad: id 
                },
                include:{
                    alumnos: true,
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}