
import { EspecialidadRepository } from "../repositories/especialidad.repository"
import { Prisma, Especialidad } from "@prisma/client"

const repository = new EspecialidadRepository()

export class EspecialidadService {

    public static async get() : Promise<Especialidad[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de especialidades ${error}`)
        }

    }

    public static async findById(id : number) : Promise<Especialidad | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la especialidad ${error}`)
        }

    }

    public static async create(especialidad: Prisma.EspecialidadCreateInput) : Promise<Especialidad> {
        try {
            const result = await repository.create(especialidad)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear una nueva especialidad ${error}`)
        }
    }

    public static async update(id : number, especialidad : Prisma.EspecialidadUpdateInput) : Promise<Especialidad> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La especialidad que desea actualizar no existe")
            }

            const result = await repository.update(id, especialidad)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar la especialidad ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Especialidad> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La especialidad que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar la especialidad ${error}`)
        }
    }

}