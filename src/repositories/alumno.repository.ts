
import { Prisma, Alumno } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "config/client"

export class AlumnoRepository extends BaseRepository 
<typeof prisma.alumno, Alumno, Prisma.AlumnoCreateInput, Prisma.AlumnoUpdateInput> {

    constructor(){
        super(prisma.alumno)
    }

    public async getById(id : number) {
        // try {
        //     const result = await prisma.university.findUnique({
        //         where: {
        //             id: id
        //         },
        //         include: {
        //             faculty: true
        //         }
        //     })

        //     return result
        // } 
        // catch (error : any) {
        //     throw new Error(`Error al leer la base de datos: ${error}`)
        // }
    }

}