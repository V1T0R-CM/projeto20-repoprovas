/*
  Warnings:

  - You are about to drop the column `termsId` on the `Disciplines` table. All the data in the column will be lost.
  - Added the required column `termId` to the `Disciplines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Disciplines" DROP CONSTRAINT "Disciplines_termsId_fkey";

-- AlterTable
ALTER TABLE "Disciplines" DROP COLUMN "termsId",
ADD COLUMN     "termId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Disciplines" ADD CONSTRAINT "Disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
