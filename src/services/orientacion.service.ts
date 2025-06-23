
import { Prisma, Orientacion } from "@prisma/client"
import { InputOrientacion } from "types"
import { OrientacionRepository } from "../repositories/orientacion.repository"
import { MapperInputOrientacionToPrsima } from "../helpers/mappers"

const repository = new OrientacionRepository()

export class OrientacionService {

    public static async get() : Promise<Orientacion[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de orientaciones ${error}`)
        }
    }

    public static async findById(id : Prisma.OrientacionWhereUniqueInput) : Promise<Orientacion | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la orientacion ${error}`)
        }
    }

    public static async create(orientacion : InputOrientacion) : Promise<Orientacion> {
        try {
            const result = await repository.create(MapperInputOrientacionToPrsima.toPrismaCreate(orientacion))
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear la nueva orientacion ${error}`)
        }
    }

    public static async update(id : Prisma.OrientacionWhereUniqueInput, orientacion : Prisma.OrientacionUpdateInput) : Promise<Orientacion> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La orientacion que desea actualizar no existe")
            }

            const result = await repository.update(id, orientacion)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar la orientacion ${error}`)
        }
    }

    public static async delete(id : Prisma.OrientacionWhereUniqueInput) : Promise<Orientacion> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("El plan que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar la orientacion ${error}`)
        }
    }

}