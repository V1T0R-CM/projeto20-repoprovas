import { prisma } from "../config/database";

export async function getByTeacherIdAndDisciplineId(teacherId: number, disciplineId: number) {
    const result = await prisma.teacherDisciplines.findUnique({ where: { teacherId_disciplineId: { teacherId: teacherId, disciplineId: disciplineId } } })
    return result
}