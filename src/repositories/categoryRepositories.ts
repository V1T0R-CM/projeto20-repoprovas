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
                            },
                            Teachers: {
                                select: { name: true },
                            }
                        }
                    }
                }
            }
        }
    });
}

export async function getAllByTeacherId(teacherId: number) {
    const result = await prisma.categories.findMany({
        where: {
            Tests: {
                some: {
                    TeacherDisciplines: {
                        teacherId: teacherId
                    }
                }
            }
        }, select: {
            id: true,
            name: true,
            Tests: {
                select: {
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
            }
        }
    });

    return result;
}