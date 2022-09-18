import supertest from "supertest";
import app from "../src/index";
import { prisma } from "../src/config/database";
import { registerFactory, loginFactory } from "./factories/authFactory";


beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Accounts"`;
});

describe('Teste rota POST /signup', () => {
    it("Deve criar uma conta e retornar status 201", async () => {
        const account = await registerFactory(10, true);

        const result = await supertest(app).post('/signup').send(account);

        const createdAccount = await prisma.accounts.findUnique({
            where: { email: account.email }
        });

        expect(result.status).toBe(201);
        expect(createdAccount).not.toBeNull();
    });

    it('Deve passar uma conta com email que já existe e ter como retorno 409', async () => {
        const account = await registerFactory(10, true);

        await supertest(app).post(`/signup`).send(account);
        const result = await supertest(app).post(`/signup`).send(account);

        expect(result.status).toBe(409);
    });

    it('Deve passar uma confirmação de senha invalida e ter como retorno 400', async () => {
        const account = await registerFactory(10, false);

        const result = await supertest(app).post(`/signup`).send(account);

        expect(result.status).toBe(400);
    });

    it('Deve passar uma senha invalida e ter como retorno 400', async () => {
        const account = await registerFactory(8, true);

        const result = await supertest(app).post(`/signup`).send(account);

        expect(result.status).toBe(400);
    });
})

describe('Teste rota POST /signin', () => {
    it("Deve logar em uma conta e retornar status 200", async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const result = await supertest(app).post('/signin').send(account);

        expect(result.status).toBe(200);
    });

    it('Deve passar um email invalido e ter como retorno 401', async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory("", regiterAccount.password);

        await supertest(app).post('/signup').send(regiterAccount);
        const result = await supertest(app).post('/signin').send(account);

        expect(result.status).toBe(401);
    });

    it('Deve passar uma senha invalida e ter como retorno 401', async () => {
        const regiterAccount = await registerFactory(10, true);
        const account = await loginFactory(regiterAccount.email, "");

        await supertest(app).post('/signup').send(regiterAccount);
        const result = await supertest(app).post('/signin').send(account);

        expect(result.status).toBe(401);
    });
})

afterAll(async () => {
    await prisma.$disconnect();
});