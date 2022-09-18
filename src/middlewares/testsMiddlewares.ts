import { Request, Response, NextFunction } from "express";
import { testsSchema } from "../schemas/testsSchemas";

export function testsValidation(req: Request, res: Response, next: NextFunction) {
    const validation = testsSchema.validate(req.body);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };

    next()
}