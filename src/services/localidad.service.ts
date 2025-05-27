
import { LocalidadRepository } from "../repositories/localidad.repository"
import { Localidad, Prisma } from "@prisma/client"

const repository = new LocalidadRepository()


export class LocalidadService {

    public static async get() : Promise<Localidad[]> {
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de localidades ${error}`)
        }
    }
   
    public static async findById(id : number) : Promise<Localidad | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la localidad ${error}`)
        }
    }
   
    public static async create(localidad : Prisma.LocalidadCreateInput) : Promise<Localidad> {
        try {
            const result = await repository.create(localidad)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear la nueva localidad ${error}`)
        }
    }
   
    public static async update(id : number, localidad : Prisma.LocalidadUpdateInput) : Promise<Localidad> {
        try {
            const exists = await repository.getById(id)
   
            if (exists === null) {
                throw new Error("La localidad que desea actualizar no existe")
            }
   
            const result = await repository.update(id, localidad)
   
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar la localidad ${error}`)
        }
    }
   
    public static async delete(id : number) : Promise<Localidad> {
        try {
               const exists = await repository.getById(id)
   
            if (exists === null) {
                throw new Error("La localidad que desea eliminar no existe")
            }
   
            const result = await repository.delete(id)
   
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar la localidad ${error}`)
        }
    }

}