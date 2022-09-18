import { Request, Response } from 'express';
import { registerTests } from "../services/testsServices"

export async function createTests(req: Request, res: Response) {
    await registerTests(req.body);
    res.sendStatus(201);
}