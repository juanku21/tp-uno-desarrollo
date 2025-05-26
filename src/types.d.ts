
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