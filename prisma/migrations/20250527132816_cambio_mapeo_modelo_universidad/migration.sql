/*
  Warnings:

  - The primary key for the `universidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `universidad` on the `universidades` table. All the data in the column will be lost.
  - Added the required column `universida` to the `universidades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "universidades" DROP CONSTRAINT "universidades_pkey",
DROP COLUMN "universidad",
ADD COLUMN     "universida" INTEGER NOT NULL,
ADD CONSTRAINT "universidades_pkey" PRIMARY KEY ("universida");
