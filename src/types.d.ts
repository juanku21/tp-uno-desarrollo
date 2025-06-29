
import { Prisma } from "@prisma/client"

export type EspecialidadConRelaciones = Prisma.EspecialidadGetPayload<{
    include: {
        orientaciones: true,
        materias: true,
        planes: true
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
    ano : string
    especialidad : number,
    plan : number,
}


export interface AlumnoInput {
  apellido: string;
  nombre: string;
  numero_documento: number;
  tipo_documento: 'LibretaCivica' | 'LibretaEnrolamiento' | 'Pasaporte';
  fecha_nacimiento: Date;
  sexo: 'M' | 'F';
  numero_legajo: number;
  fecha_ingreso: Date;
}


export interface InputUniversidad {
    universida : number,
    nombre : string
}
