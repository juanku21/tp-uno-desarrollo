

import { InputPlan, InputOrientacion, InputMateria } from "types"
import { Prisma } from "@prisma/client"

export class MapperInputPlanToPrsima {

    public static toPrismaCreate(inputPlan : InputPlan) : Prisma.PlanCreateInput {
        return {
            plan: inputPlan.plan,
            nombre: inputPlan.nombre,
            especialidades: {
                create: [
                    {
                        especialidades: {
                            connect: {
                                especialidad: inputPlan.especialidad
                            }
                        }
                    }
                ]
            }
        }
    }

}


export class MapperInputOrientacionToPrsima {

    public static toPrismaCreate(inputMateria : InputMateria) : Prisma.MateriaCreateInput {
        return {
            materia: inputMateria.materia,
            nombre: inputMateria.nombre,
            ano: inputMateria.ano,
            especialidades: {
                connect: {
                    especialidad: inputMateria.especialidad
                }
            },
            planes: {
                connect: {
                    plan: inputMateria.plan
                }
            }
        }
    }

}


export class MapperInputMateriaToPrsima {

    public static toPrismaCreate(inputOrientacion : InputOrientacion) : Prisma.OrientacionCreateInput {
        return {
            orientacion: inputOrientacion.orientacion,
            nombre: inputOrientacion.nombre,
            especialidades: {
                connect: {
                    especialidad: inputOrientacion.especialidad
                }
            },
            planes: {
                connect: {
                    plan: inputOrientacion.plan
                }
            }
        }
    }

}