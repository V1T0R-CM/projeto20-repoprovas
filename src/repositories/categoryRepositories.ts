import { prisma } from "../config/database";

export async function getByName(name: string) {
    const result = await prisma.categories.findUnique({
        where: { name: name }
    });

    return result
}

export async function getAllCategoryTests() {
    return await prisma.categories.findMany({
        select: {
            id: true,
            name: true,
            Tests: {
                select: {
                    id: true,
                    name: true,
                    pdfUrl: true,
                    TeacherDisciplines: {
                        select: {
                            disciplineId: true,
                            Disciplines: {
                                select: { id: true, name: true },
                            }
                        }
                    }
                }
            }
        }
    });
}