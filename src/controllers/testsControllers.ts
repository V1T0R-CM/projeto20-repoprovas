import { Request, Response } from 'express';
import * as testsServices from "../services/testsServices"

export async function createTests(req: Request, res: Response) {
    await testsServices.registerTests(req.body);
    res.sendStatus(201);
}

export async function getTestsByDiscipline(req: Request, res: Response) {
    const result = await testsServices.getTestsByDiscipline();
    res.status(200).send(result);
}