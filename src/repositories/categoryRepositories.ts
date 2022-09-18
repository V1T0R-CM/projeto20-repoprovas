import { prisma } from "../config/database";

export async function getByName(name: string) {
    const result = await prisma.categories.findUnique({
        where: { name: name }
    });

    return result
}