import { prisma } from "../config/database";

export async function getAllTermsDisciplines() {
    return await prisma.terms.findMany({
        select: {
            id: true,
            number: true,
            Disciplines: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}