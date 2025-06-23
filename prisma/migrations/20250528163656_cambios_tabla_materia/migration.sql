/*
  Warnings:

  - The primary key for the `materias` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "materias" DROP CONSTRAINT "materias_pkey",
ADD CONSTRAINT "materias_pkey" PRIMARY KEY ("materia", "especialidad", "plan");
