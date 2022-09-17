import { faker } from "@faker-js/faker";

export function testsFactory(category: string, discipline: string, teacher: string) {
    return {
        name: "Prova de react",
        pdfUrl: faker.internet.url(),
        category: category,
        discipline: discipline,
        teacher: teacher
    }
}