
import { GradoRepository } from "../repositories/grado.repository"
import { Grado, Prisma } from "@prisma/client"

const repository = new GradoRepository()

export class GradoService {

    public static async get() : Promise<Grado[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de grados ${error}`)
        }
    }

    public static async findById(id : number) : Promise<Grado | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener el grados ${error}`)
        }
    }

    public static async create(grado : Prisma.GradoCreateInput) : Promise<Grado> {
        try {
            const result = await repository.create(grado)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear un nuevo grado ${error}`)
        }
    }

    public static async update(id : number, grado : Prisma.GradoUpdateInput) : Promise<Grado> {
        try {
            const gradoExists = await repository.getById(id)

            if (gradoExists === null) {
                throw new Error("El grado que desea actualizar no existe")
            }

            const result = await repository.update(id, grado)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar el grado ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Grado> {
        try {
            const gradoExists = await repository.getById(id)

            if (gradoExists === null) {
                throw new Error("El grado que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar el grado ${error}`)
        }
    }

}

