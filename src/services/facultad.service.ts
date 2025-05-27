import { FacultadRepository } from "../repositories/facultad.repository"
import { Prisma, Facultad } from "@prisma/client"

const repository = new FacultadRepository()

export class FacultadService {

    public static async get() : Promise<Facultad[]>{
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de facultades ${error}`)
        }
    }

    public static async findById(id : number) : Promise<Facultad | null> {
        try{
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la facultad ${error}`)
        }
    }

    public static async create(facultad: Prisma.FacultadCreateInput) : Promise<Facultad> {
        try {
            const result = await repository.create(facultad)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear una nueva facultad ${error}`)
        }
    }

    public static async update(id : number, facultad : Prisma.FacultadUpdateInput) : Promise<Facultad> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La facultad que desea actualizar no existe")
            }

            const result = await repository.update(id, facultad)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar la facultad ${error}`)
        }
    }

    public static async delete(id : number) : Promise<Facultad>{
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La facultad que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar la facultad ${error}`)
        }
    }

}