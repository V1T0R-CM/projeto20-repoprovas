import { prisma } from "../config/database";
import { ITestsData } from "../types/testsTypes";

export async function insert(testsData: ITestsData) {
    await prisma.tests.create({ data: testsData })
}

export async function getAllByTeacherId(teacherId: number) {
    const result = await prisma.tests.findMany({
        where: {
            TeacherDisciplines: {
                teacherId: teacherId
            }
        }, select: {
            id: true,
            name: true,
            pdfUrl: true,
            TeacherDisciplines: {
                select: {
                    Disciplines: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });

    return result;
}