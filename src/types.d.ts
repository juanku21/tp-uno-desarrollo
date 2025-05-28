
import { Prisma } from "@prisma/client"

export type EspecialidadConRelaciones = Prisma.EspecialidadGetPayload<{
    include: {
        orientaciones: true,
        materias: true,
        planes: true
    }
}>


export type FacultadConRelaciones = Prisma.FacultadGetPayload<{
    include: {
        alumnos: true
    }
}>


export type PlanConRelaciones = Prisma.PlanGetPayload<{
    include: {
        materias: true,
        orientaciones: true,
        especialidades: true
    }
}>


export interface InputPlan {
    especialidad: number,
    plan: number,
    nombre: string
}

export interface InputOrientacion {
    orientacion : number,
    especialidad : number,
    plan : number,
    nombre : string
}


export interface InputMateria {
    materia : number,
    nombre : string
    ano : number
    especialidad : number,
    plan : number,
}


export interface InputAlumno {
    alumno : number,
    nombre : string,
    apellido : string,
    facultad_id : number
}


export interface InputUniversidad {
    universida : number,
    nombre : string
}
