

import { InputPlan, InputOrientacion, InputMateria, InputAlumno, InputUniversidad } from "types"
import { Prisma } from "@prisma/client"

export class MapperInputPlanToPrsima {

    public static toPrismaCreate(inputPlan : InputPlan) : Prisma.PlanEspecialidadCreateInput {
        return {
            planes: {
                connectOrCreate: {
                    where: {
                        plan: inputPlan.plan
                    },
                    create: {
                        plan: inputPlan.plan,
                        nombre: inputPlan.nombre
                    }
                }
            },

            especialidades: {
                connect: {
                    especialidad: inputPlan.especialidad
                }
            }
        }
    }

}


export class MapperInputMateriaToPrsima {

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


export class MapperInputOrientacionToPrsima {

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


export class MapperInputAlumnoToPrsima {

    public static toPrismaCreate(inputAlumno : InputAlumno) : Prisma.AlumnoCreateInput {
        return {
            alumno: inputAlumno.alumno,
            nombre: inputAlumno.nombre,
            apellido: inputAlumno.apellido,
            facultad: {
                connect: {
                    facultad: inputAlumno.facultad_id
                }
            }
        }
    }

}


export class MapperInputUniversidadToPrsima {

    public static toPrismaCreate(inputUniversidad : InputUniversidad) : Prisma.UniversidadCreateInput {
        return {
            universidad: inputUniversidad.universida,
            nombre: inputUniversidad.nombre
        }
    }

}