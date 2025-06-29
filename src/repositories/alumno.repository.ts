
import { Prisma, Alumno } from "@prisma/client"
import { BaseRepository } from "./base.repository"
import prisma from "../config/client"

export class AlumnoRepository extends BaseRepository 
<typeof prisma.alumno, Alumno, Prisma.AlumnoCreateInput, Prisma.AlumnoUpdateInput> {

    constructor(){
        super(prisma.alumno)
    }

    public async get() : Promise<Alumno[]> {
        try {
            const result = await (this.model as any).findMany({
                orderBy: {
                    alumno: 'desc'
                }
            })
            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }

    public async getById(id : number) {
        try {
            const result = await prisma.alumno.findUnique({
                where: {
                    alumno: id
                }
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al leer la base de datos: ${error}`)
        }
    }


    public async createMany(data : Prisma.AlumnoCreateInput[]) : Promise<object> {
        try {
            const result = await prisma.alumno.createMany({
                data: data,
                skipDuplicates: true
            })

            return result
        } 
        catch (error : any) {
            throw new Error(`Error al escribir la base de datos: ${error}`)
        }
 
    }

}