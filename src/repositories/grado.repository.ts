

import { Prisma, Grado } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class GradoRepository extends BaseRepository 
<typeof prisma.grado, Grado, Prisma.GradoCreateInput, Prisma.GradoUpdateInput> {

    constructor(){
        super(prisma.grado)
    }

    public async getById(id : number) : Promise<Grado | null> {
        try {
            const result = await prisma.grado.findUnique({
                where: {
                    grado: id 
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}