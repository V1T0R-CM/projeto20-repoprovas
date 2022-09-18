import { prisma } from "../config/database";

export async function getByName(name: string) {
    const result = await prisma.teachers.findUnique({
        where: { name: name }
    });

    return result
}

export async function getAll() {
    const result = await prisma.teachers.findMany()
    return result
}