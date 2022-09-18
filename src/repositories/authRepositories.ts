import { prisma } from "../config/database"
import { IAccountData } from "../types/accountTypes";

export async function getById(id: number) {
    const result = await prisma.accounts.findUnique({ where: { id: id } });
    return result
}

export async function getByEmail(email: string) {
    const result = await prisma.accounts.findUnique({ where: { email: email } });
    return result
}

export async function insert(accountData: IAccountData) {
    await prisma.accounts.create({ data: accountData })
}