import { faker } from "@faker-js/faker";

export async function testsFactory(category: string, discipline: string, teacher: string) {
    return await {
        name: "Prova de react",
        pdfUrl: faker.internet.url(),
        category: category,
        discipline: discipline,
        teacher: teacher
    }
}