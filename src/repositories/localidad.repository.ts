

import { Prisma, Localidad } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class LocalidadRepository extends BaseRepository 
<typeof prisma.localidad, Localidad, Prisma.LocalidadCreateInput, Prisma.LocalidadUpdateInput> {

    constructor(){
        super(prisma.localidad)
    }

    public async getById(id : number) : Promise<Localidad | null> {
        try {
            const result = await prisma.localidad.findUnique({
                where: {
                    codigo: id 
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

}