-- CreateTable
CREATE TABLE "universidades" (
    "universidad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "universidades_pkey" PRIMARY KEY ("universidad")
);

-- CreateTable
CREATE TABLE "facultades" (
    "facultad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "facultades_pkey" PRIMARY KEY ("facultad")
);

-- CreateTable
CREATE TABLE "especialidades" (
    "especialidad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("especialidad")
);

-- CreateTable
CREATE TABLE "grados" (
    "grado" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "grados_pkey" PRIMARY KEY ("grado")
);

-- CreateTable
CREATE TABLE "localidades" (
    "codigo" INTEGER NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "pais_del_c" TEXT NOT NULL,

    CONSTRAINT "localidades_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "materias" (
    "materia" INTEGER NOT NULL,
    "especialidad" INTEGER NOT NULL,
    "plan" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,

    CONSTRAINT "materias_pkey" PRIMARY KEY ("materia")
);

-- CreateTable
CREATE TABLE "orientaciones" (
    "nombre" TEXT NOT NULL,
    "plan" INTEGER NOT NULL,
    "especialidad" INTEGER NOT NULL,

    CONSTRAINT "orientaciones_pkey" PRIMARY KEY ("plan","especialidad")
);

-- CreateTable
CREATE TABLE "paises" (
    "pais" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "paises_pkey" PRIMARY KEY ("pais")
);

-- CreateTable
CREATE TABLE "planes" (
    "plan" INTEGER NOT NULL,
    "especialidad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "planes_pkey" PRIMARY KEY ("plan")
);

-- CreateTable
CREATE TABLE "alumnos" (
    "alumno" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "facultad" INTEGER NOT NULL,

    CONSTRAINT "alumnos_pkey" PRIMARY KEY ("alumno")
);

-- AddForeignKey
ALTER TABLE "materias" ADD CONSTRAINT "materias_especialidad_fkey" FOREIGN KEY ("especialidad") REFERENCES "especialidades"("especialidad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materias" ADD CONSTRAINT "materias_plan_fkey" FOREIGN KEY ("plan") REFERENCES "planes"("plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orientaciones" ADD CONSTRAINT "orientaciones_plan_fkey" FOREIGN KEY ("plan") REFERENCES "planes"("plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orientaciones" ADD CONSTRAINT "orientaciones_especialidad_fkey" FOREIGN KEY ("especialidad") REFERENCES "especialidades"("especialidad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planes" ADD CONSTRAINT "planes_especialidad_fkey" FOREIGN KEY ("especialidad") REFERENCES "especialidades"("especialidad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumnos" ADD CONSTRAINT "alumnos_facultad_fkey" FOREIGN KEY ("facultad") REFERENCES "facultades"("facultad") ON DELETE RESTRICT ON UPDATE CASCADE;
