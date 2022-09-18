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

    await prisma.terms.upsert({
        where: { number: termList[0].number },
        update: {},
        create: termList[0]
    });

    await prisma.terms.upsert({
        where: { number: termList[1].number },
        update: {},
        create: termList[1]
    });

    await prisma.terms.upsert({
        where: { number: termList[2].number },
        update: {},
        create: termList[2]
    });

    await prisma.terms.upsert({
        where: { number: termList[3].number },
        update: {},
        create: termList[3]
    });

    await prisma.terms.upsert({
        where: { number: termList[4].number },
        update: {},
        create: termList[4]
    });

    await prisma.terms.upsert({
        where: { number: termList[5].number },
        update: {},
        create: termList[5]
    });

    const categoryList = [
        { name: "Projeto" },
        { name: "Prática" },
        { name: "Recuperação" },
        { name: "P1" },
        { name: "P2" },
        { name: "P3" },
        { name: "PF" }
    ]

    await prisma.categories.upsert({
        where: { name: categoryList[0].name },
        update: {},
        create: categoryList[0]
    });

    await prisma.categories.upsert({
        where: { name: categoryList[1].name },
        update: {},
        create: categoryList[1]
    });

    await prisma.categories.upsert({
        where: { name: categoryList[2].name },
        update: {},
        create: categoryList[2]
    });

    await prisma.categories.upsert({
        where: { name: categoryList[3].name },
        update: {},
        create: categoryList[3]
    });

    await prisma.categories.upsert({
        where: { name: categoryList[4].name },
        update: {},
        create: categoryList[4]
    });

    await prisma.categories.upsert({
        where: { name: categoryList[5].name },
        update: {},
        create: categoryList[5]
    });

    await prisma.categories.upsert({
        where: { name: categoryList[6].name },
        update: {},
        create: categoryList[6]
    });

    const teacherList = [
        { name: "Diego Pinho" },
        { name: "Bruna Hamori" },
        { name: "Leandro Simões" },
        { name: "Marina de Cuffa" },
        { name: "Frank Rocha" },
        { name: "Erick Silva" }
    ]

    await prisma.teachers.upsert({
        where: { name: teacherList[0].name },
        update: {},
        create: teacherList[0]
    });

    await prisma.teachers.upsert({
        where: { name: teacherList[1].name },
        update: {},
        create: teacherList[1]
    });

    await prisma.teachers.upsert({
        where: { name: teacherList[2].name },
        update: {},
        create: teacherList[2]
    });

    await prisma.teachers.upsert({
        where: { name: teacherList[3].name },
        update: {},
        create: teacherList[3]
    });

    await prisma.teachers.upsert({
        where: { name: teacherList[4].name },
        update: {},
        create: teacherList[4]
    });

    await prisma.teachers.upsert({
        where: { name: teacherList[5].name },
        update: {},
        create: teacherList[5]
    });

    const disciplineList = [
        { name: "HTML e CSS", termId: 1 },
        { name: "JavaScript", termId: 2 },
        { name: "React", termId: 3 },
        { name: "Humildade", termId: 1 },
        { name: "Planejamento", termId: 2 },
        { name: "Autoconfiança", termId: 3 }
    ]

    await prisma.disciplines.upsert({
        where: { name: disciplineList[0].name },
        update: {},
        create: disciplineList[0]
    });

    await prisma.disciplines.upsert({
        where: { name: disciplineList[1].name },
        update: {},
        create: disciplineList[1]
    });

    await prisma.disciplines.upsert({
        where: { name: disciplineList[2].name },
        update: {},
        create: disciplineList[2]
    });

    await prisma.disciplines.upsert({
        where: { name: disciplineList[3].name },
        update: {},
        create: disciplineList[3]
    });

    await prisma.disciplines.upsert({
        where: { name: disciplineList[4].name },
        update: {},
        create: disciplineList[4]
    });

    await prisma.disciplines.upsert({
        where: { name: disciplineList[5].name },
        update: {},
        create: disciplineList[5]
    });

    const teacherDisciplineList = [
        { teacherId: 1, disciplineId: 1 },
        { teacherId: 3, disciplineId: 2 },
        { teacherId: 6, disciplineId: 3 },
        { teacherId: 4, disciplineId: 4 },
        { teacherId: 5, disciplineId: 5 },
        { teacherId: 2, disciplineId: 6 }
    ]

    await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[0].teacherId, disciplineId: teacherDisciplineList[0].disciplineId } },
        update: {},
        create: teacherDisciplineList[0]
    });

    await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[1].teacherId, disciplineId: teacherDisciplineList[1].disciplineId } },
        update: {},
        create: teacherDisciplineList[1]
    });

    await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[2].teacherId, disciplineId: teacherDisciplineList[2].disciplineId } },
        update: {},
        create: teacherDisciplineList[2]
    });

    await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[3].teacherId, disciplineId: teacherDisciplineList[3].disciplineId } },
        update: {},
        create: teacherDisciplineList[3]
    });

    await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[4].teacherId, disciplineId: teacherDisciplineList[4].disciplineId } },
        update: {},
        create: teacherDisciplineList[4]
    });

    await prisma.teacherDisciplines.upsert({
        where: { teacherId_disciplineId: { teacherId: teacherDisciplineList[5].teacherId, disciplineId: teacherDisciplineList[5].disciplineId } },
        update: {},
        create: teacherDisciplineList[5]
    });
}

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});