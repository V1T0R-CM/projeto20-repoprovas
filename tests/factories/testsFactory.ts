import { faker } from "@faker-js/faker";

export function addTest(categoryId: number, teacherDiciplineId: number) {
    return {
        name: faker.lorem.words(4),
        pdfUrl: faker.internet.url(),
        categoryId: categoryId,
        teacherDiciplineId: teacherDiciplineId
    }
}