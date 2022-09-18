import { Request, Response, NextFunction } from "express";
import { testsSchema } from "../schemas/testsSchemas";
import { verifyToken } from "../utils/token";

export function testsValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const validation = testsSchema.validate(req.body);
    const account = verifyToken(token);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };
    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    next()
}