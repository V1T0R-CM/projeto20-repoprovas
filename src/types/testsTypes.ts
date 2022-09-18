import { Tests } from "@prisma/client";

export type ITestsData = Omit<Tests, "id">
export type ICreateTestsData = {
    name: string;
    pdfUrl: string;
    category: string;
    discipline: string;
    teacher: string;
}