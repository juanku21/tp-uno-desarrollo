/*
  Warnings:

  - The primary key for the `orientaciones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `especialidad` on the `planes` table. All the data in the column will be lost.
  - Added the required column `orientacion` to the `orientaciones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orientaciones" DROP CONSTRAINT "orientaciones_plan_fkey";

-- DropForeignKey
ALTER TABLE "planes" DROP CONSTRAINT "planes_especialidad_fkey";

-- AlterTable
ALTER TABLE "orientaciones" DROP CONSTRAINT "orientaciones_pkey",
ADD COLUMN     "orientacion" INTEGER NOT NULL,
ADD CONSTRAINT "orientaciones_pkey" PRIMARY KEY ("plan", "especialidad", "orientacion");

-- AlterTable
ALTER TABLE "planes" DROP COLUMN "especialidad";

-- CreateTable
CREATE TABLE "planes-especialidades" (
    "plan" INTEGER NOT NULL,
    "especialidad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "planes-especialidades_pkey" PRIMARY KEY ("plan","especialidad")
);

-- AddForeignKey
ALTER TABLE "planes-especialidades" ADD CONSTRAINT "planes-especialidades_plan_fkey" FOREIGN KEY ("plan") REFERENCES "planes"("plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planes-especialidades" ADD CONSTRAINT "planes-especialidades_especialidad_fkey" FOREIGN KEY ("especialidad") REFERENCES "especialidades"("especialidad") ON DELETE RESTRICT ON UPDATE CASCADE;
