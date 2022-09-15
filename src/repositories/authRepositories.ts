import { prisma } from "../config/database"

export async function getById(id: number) {
    const result = await prisma.accounts.findUnique({ where: { id: id } });
    return result
}

export async function getByEmail(email: string) {
    const result = await prisma.accounts.findUnique({ where: { email: email } });
    return result
}

export async function insert(email: string, password: string) {
    await prisma.accounts.create({ data: { email: email, password: password } })
}