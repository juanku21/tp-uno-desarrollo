
import { AlumnoRepository } from "../repositories/alumno.repository"
import { Alumno, Prisma } from "@prisma/client"

const repository = new AlumnoRepository()

export class AlumnoService {

    public static async get() : Promise<Alumno[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de alumnos ${error}`)
        }
    }

    public static async findById(id : number) : Promise<Alumno | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener el alumno ${error}`)
        }
    }

    public static async create(alumno : Prisma.AlumnoCreateInput) : Promise<Alumno> {
        try {
            const result = await repository.create(alumno)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear un nuevo alumno ${error}`)
        }
    }

    public static async createMany(alumnos : Prisma.AlumnoCreateInput[]) : Promise<object> {
        try {
            const result = await repository.createMany(alumnos)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear un nuevo alumno ${error}`)
        }
    }

    public static async update(id : number, alumno : Prisma.AlumnoUpdateInput) : Promise<Alumno> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El alumno que desea actualizar no existe")
            }

            const result = await repository.update(id, alumno)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar el alumno ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Alumno> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El alumno que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar el alumno ${error}`)
        }
    }


}