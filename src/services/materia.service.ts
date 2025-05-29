import { MateriaRepository } from "../repositories/materia.repository"
import { Materia, Prisma } from "@prisma/client"
import { MapperInputMateriaToPrsima } from "../helpers/mappers"
import { InputMateria } from "types"

const repository = new MateriaRepository()

export class MateriaService {

    public static async get() : Promise<Materia[]>{
        try {
            const result = await repository.get()
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la lista de materias ${error}`)
        }
    }

    public static async findById(id : Prisma.MateriaWhereUniqueInput) : Promise<Materia | null> {
        try {
            const result = await repository.getById(id)
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible obtener la materia ${error}`)
        }
    }

    public static async create(materia : InputMateria) : Promise<Materia> {
        try {
            const result = await repository.create(MapperInputMateriaToPrsima.toPrismaCreate(materia))
            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible crear una nueva materia ${error}`)
        }
    }

    public static async update(id : Prisma.MateriaWhereUniqueInput, materia : Prisma.MateriaUpdateInput) : Promise<Materia> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La materia que desea actualizar no existe")
            }

            const result = await repository.update(id, materia)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible actualizar la materia ${error}`)
        }
    }

    public static async delete(id : Prisma.MateriaWhereUniqueInput) : Promise<Materia> {
        try {
            const exists = await repository.getById(id)

            if (exists === null) {
                throw new Error("La materia que desea eliminar no existe")
            }

            const result = await repository.delete(id)

            return result
        } 
        catch (error : any) {
            throw new Error(`No fue posible eliminar la materia ${error}`)
        }
    }

}