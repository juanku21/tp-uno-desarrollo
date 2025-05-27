
import { PaisRepository } from "../repositories/pais.repository"
import { Prisma, Pais } from "@prisma/client"

const repository = new PaisRepository()

export class PaisService {

    public static async get() : Promise<Pais[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de paises ${error}`)
        }
    }
    
    public static async findById(id : number) : Promise<Pais | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener el pais ${error}`)
        }
    }
    
    public static async create(pais : Prisma.PaisCreateInput) : Promise<Pais> {
        try {
            const result = await repository.create(pais)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear un nuevo pais ${error}`)
        }
    }

    public static async update(id : number, pais : Prisma.PaisUpdateInput) : Promise<Pais> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El pais que desea actualizar no existe")
            }

            const result = await repository.update(id, pais)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar el pais ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Pais> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El pais que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar el pais ${error}`)
        }
    }

}
