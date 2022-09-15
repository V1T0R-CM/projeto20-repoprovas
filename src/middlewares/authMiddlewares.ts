import { Request, Response, NextFunction } from "express";
import { loginSchema, registerSchema } from "../schemas/accountSchema";

export function registerValidation(req: Request, res: Response, next: NextFunction) {
    const validation = registerSchema.validate(req.body);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };
    if (req.body.passwordConfirmation !== req.body.password) throw { code: "BadRequest", message: "A senha e a confirmação não são iguais" };

    next()
}

export function loginValidation(req: Request, res: Response, next: NextFunction) {
    const validation = loginSchema.validate(req.body);

    if (validation.error) throw { code: "BadRequest", message: validation.error.message };

    next()
}