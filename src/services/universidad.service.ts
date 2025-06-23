
import { UniversidadRepository } from "../repositories/universidad.repository"
import { Universidad, Prisma } from "@prisma/client"
import { InputUniversidad } from "types"
import { MapperInputUniversidadToPrsima } from "../helpers/mappers"

const repository = new UniversidadRepository()

export class UniversidadService {

    public static async get() : Promise<Universidad[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de universidades ${error}`)
        }
    }

    public static async findById(id : number) : Promise<Universidad | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la universidad ${error}`)
        }
    }

    public static async create(universidad : InputUniversidad) : Promise<Universidad> {
        try {
            const result = await repository.create(MapperInputUniversidadToPrsima.toPrismaCreate(universidad))
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear una nueva universidad ${error}`)
        }
    }

    public static async update(id : number, universidad : Prisma.UniversidadUpdateInput) : Promise<Universidad> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La universidad que desea actualizar no existe")
            }

            const result = await repository.update(id, universidad)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar la universidad ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Universidad> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La universidad que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar la universidad ${error}`)
        }
    }

}