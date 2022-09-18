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
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const test = await testsFactory("P1", "React", "Erick Silva");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(201);
    });

    it("Deve enviar uma categoria inexistente e retornar status 404", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const test = await testsFactory("P4", "React", "Erick Silva");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(404);
    });

    it("Deve enviar uma disciplina inexistente e retornar status 404", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const test = await testsFactory("P1", "Express", "Erick Silva");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(404);
    });

    it("Deve enviar um professor inexistente e retornar status 404", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const test = await testsFactory("P1", "React", "Vitor Carvalho Matos");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(404);
    })

    it("Deve enviar um professor e uma disciplina que não é ministrada por ele e retornar status 400", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const test = await testsFactory("P1", "React", "Bruna Hamori");
        const result = await supertest(app).post("/tests").send(test).set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(400);
    });
});

describe('Teste rota GET disciplines/tests', () => {
    it("Deve retornar todas as provas separadas por disciplina e retornar status 200", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const result = await supertest(app).get("/disciplines/tests").set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
    });

    it("Deve enviar um authorization invalido e retornar status 401", async () => {
        const token = "TokenInvalido";
        const result = await supertest(app).get("/disciplines/tests").set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(401);
    });
});

describe('Teste rota GET teachers/tests', () => {
    it("Deve retornar todas as provas separadas por professores e retornar status 200", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const loginResult = await supertest(app).post('/signin').send(account);
        const token = loginResult.body.token;
        const result = await supertest(app).get("/teachers/tests").set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
    });

    it("Deve enviar um authorization invalido e retornar status 401", async () => {
        const token = "TokenInvalido";
        const result = await supertest(app).get("/teachers/tests").set({ authorization: `Bearer ${token}` })

        expect(result.status).toBe(401);
    });
});