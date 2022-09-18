/*
  Warnings:

  - A unique constraint covering the columns `[teacherId,disciplineId]` on the table `TeacherDisciplines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TeacherDisciplines_teacherId_disciplineId_key" ON "TeacherDisciplines"("teacherId", "disciplineId");
