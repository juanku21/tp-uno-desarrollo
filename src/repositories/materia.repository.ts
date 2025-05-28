
import { Prisma, Materia } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class MateriaRepository extends BaseRepository 
<typeof prisma.materia, Materia, Prisma.MateriaCreateInput, Prisma.MateriaUpdateInput> {

    constructor(){
        super(prisma.materia)
    }

    public async getById(id : number) : Promise<Materia | null> {
        try {
            const result = await prisma.materia.findUnique({
                where: {
                    materia: id 
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}

