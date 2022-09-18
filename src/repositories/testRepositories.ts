import { prisma } from "../config/database";
import { ITestsData } from "../types/testsTypes";

export async function insert(testsData: ITestsData) {
    await prisma.tests.create({ data: testsData })
}
