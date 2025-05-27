
import { Prisma, Pais } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class PaisRepository extends BaseRepository 
<typeof prisma.pais, Pais, Prisma.PaisCreateInput, Prisma.PaisUpdateInput> {

    constructor(){
        super(prisma.pais)
    }

    public async getById(id : number) : Promise<Pais | null> {
        try {
            const result = await prisma.pais.findUnique({
                where: {
                    pais: id 
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}
