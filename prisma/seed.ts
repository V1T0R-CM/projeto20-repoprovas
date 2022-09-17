import { number } from "joi";
import { prisma } from "../src/config/database";

async function main() {
    const termList = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 }
    ]

    const categoryList = [
        { name: "Projeto" },
        { name: "Prática" },
        { name: "Recuperação" },
        { name: "P1" },
        { name: "P2" },
        { name: "P3" },
        { name: "PF" }
    ]

    const teacherList = [
        { name: "Diego Pinho" },
        { name: "Bruna Hamori" },
        { name: "Leandro Simões" },
        { name: "Marina de Cuffa" },
        { name: "Frank Rocha" },
        { name: "Leandro Eduardo" },
        { name: "Erick Silva" }
    ]

    const disciplineList = [
        { name: "HTML e CSS", termId: 1 },
        { name: "JavaScript", termId: 2 },
        { name: "React", termId: 3 },
        { name: "Humildade", termId: 1 },
        { name: "Planejamento", termId: 2 },
        { name: "Autoconfiança", termId: 3 }
    ]

    const teacherDisciplinesList = [
        { teacherId: 1, disciplineId: 1 },
        { teacherId: 1, disciplineId: 2 },
        { teacherId: 1, disciplineId: 3 },
        { teacherId: 2, disciplineId: 4 },
        { teacherId: 2, disciplineId: 5 },
        { teacherId: 2, disciplineId: 6 }
    ]

    await termList.map(async term => await prisma.terms.upsert({
        where: { number: term.number },
        update: {},
        create: term
    }))

    await categoryList.map(async category => await prisma.categories.upsert({
        where: { name: category.name },
        update: {},
        create: category
    }))

    await teacherList.map(async teacher => await prisma.teachers.upsert({
        where: { name: teacher.name },
        update: {},
        create: teacher
    }))

    await disciplineList.map(async discipline => {
        await prisma.disciplines.upsert({
            where: { name: discipline.name },
            update: {},
            create: discipline
        })
    })

    await teacherDisciplinesList.map(async teacherDiscipline => await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDiscipline.teacherId, disciplineId: teacherDiscipline.disciplineId } },
        update: {},
        create: teacherDiscipline
    }))
}

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});