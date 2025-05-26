/*
  Warnings:

  - You are about to drop the column `facultad` on the `alumnos` table. All the data in the column will be lost.
  - Added the required column `facultad_id` to the `alumnos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "alumnos" DROP CONSTRAINT "alumnos_facultad_fkey";

-- AlterTable
ALTER TABLE "alumnos" DROP COLUMN "facultad",
ADD COLUMN     "facultad_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "alumnos" ADD CONSTRAINT "alumnos_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "facultades"("facultad") ON DELETE RESTRICT ON UPDATE CASCADE;
