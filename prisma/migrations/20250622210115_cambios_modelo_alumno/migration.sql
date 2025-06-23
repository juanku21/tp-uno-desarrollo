/*
  Warnings:

  - You are about to drop the column `facultad_id` on the `alumnos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numero_documento]` on the table `alumnos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numero_legajo]` on the table `alumnos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fecha_ingreso` to the `alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_nacimiento` to the `alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero_documento` to the `alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero_legajo` to the `alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `alumnos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_documento` to the `alumnos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('LibretaCivica', 'LibretaEnrolamiento', 'Pasaporte');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('F', 'M');

-- DropForeignKey
ALTER TABLE "alumnos" DROP CONSTRAINT "alumnos_facultad_id_fkey";

-- AlterTable
CREATE SEQUENCE alumnos_alumno_seq;
ALTER TABLE "alumnos" DROP COLUMN "facultad_id",
ADD COLUMN     "fecha_ingreso" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "numero_documento" INTEGER NOT NULL,
ADD COLUMN     "numero_legajo" INTEGER NOT NULL,
ADD COLUMN     "sexo" "Sexo" NOT NULL,
ADD COLUMN     "tipo_documento" "TipoDocumento" NOT NULL,
ALTER COLUMN "alumno" SET DEFAULT nextval('alumnos_alumno_seq');
ALTER SEQUENCE alumnos_alumno_seq OWNED BY "alumnos"."alumno";

-- CreateIndex
CREATE UNIQUE INDEX "alumnos_numero_documento_key" ON "alumnos"("numero_documento");

-- CreateIndex
CREATE UNIQUE INDEX "alumnos_numero_legajo_key" ON "alumnos"("numero_legajo");
