import * as categoryRepositories from "../repositories/categoryRepositories";
import * as teacherRepositories from "../repositories/teacherRepositories";
import * as disciplineRepositories from "../repositories/disciplineRepositories";
import * as teacherDisciplineRepositories from "../repositories/teacherDisciplineRepositories";
import * as testRepositories from "../repositories/testRepositories";
import { ICreateTestsData } from "../types/testsTypes";

export async function registerTests(createTestsData: ICreateTestsData) {
    const category = await categoryRepositories.getByName(createTestsData.category);
    const teacher = await teacherRepositories.getByName(createTestsData.teacher);
    const discipline = await disciplineRepositories.getByName(createTestsData.discipline);

    if (!category) throw { code: "NotFound", message: "Esta categoria não esta registrada" }
    if (!teacher) throw { code: "NotFound", message: "Este professor(a) não esta registrado(a)" }
    if (!discipline) throw { code: "NotFound", message: "Esta disciplina não esta registrado" }

    const teacherDiscipline = await teacherDisciplineRepositories.getByTeacherIdAndDisciplineId(teacher.id, discipline.id);

    if (!teacherDiscipline) throw { code: "BadRequest", message: "Esta disciplina não dada pro esse professor" }

    await testRepositories.insert({ name: createTestsData.name, pdfUrl: createTestsData.pdfUrl, categoryId: category.id, teacherDisciplineId: teacherDiscipline.id });
}