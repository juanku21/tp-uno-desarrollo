import { Prisma, Universidad } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class UniversidadRepository extends BaseRepository 
<typeof prisma.universidad, Universidad, Prisma.UniversidadCreateInput, Prisma.UniversidadUpdateInput> {

    constructor(){
        super(prisma.universidad)
    }

    public async getById(id : number) : Promise<Universidad | null> {
        try {
            const result = await prisma.universidad.findUnique({
                where: {
                    universidad: id 
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}