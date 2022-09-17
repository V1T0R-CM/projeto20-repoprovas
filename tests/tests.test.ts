import supertest from "supertest";
import app from "../src/index";
import { prisma } from "../src/config/database";
import { registerFactory, loginFactory } from "./factories/authFactory";
import { testsFactory } from "./factories/testsFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Tests"`;
});

describe('Teste rota POST /tests', () => {
    it("Deve criar uma prova e retornar status 201", async () => {
        const regiterAccount = registerFactory(10, true);
        const account = loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);

        const test = testsFactory("P1", "React", "Erick Silva");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${loginResult.body.token}` })

        expect(result.status).toBe(201);
    });

    it("Deve enviar uma categoria inexistente e retornar status 404", async () => {
        const regiterAccount = registerFactory(10, true);
        const account = loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);

        const test = testsFactory("P4", "React", "Erick Silva");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${loginResult.body.token}` })

        expect(result.status).toBe(404);
    });

    it("Deve enviar uma disciplina inexistente e retornar status 404", async () => {
        const regiterAccount = registerFactory(10, true);
        const account = loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);

        const test = testsFactory("P1", "Express", "Erick Silva");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${loginResult.body.token}` })

        expect(result.status).toBe(404);
    });

    it("Deve enviar uma professor inexistente e retornar status 404", async () => {
        const regiterAccount = registerFactory(10, true);
        const account = loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);

        const test = testsFactory("P1", "React", "Vitor Carvalho Matos");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${loginResult.body.token}` })

        expect(result.status).toBe(404);
    });
})