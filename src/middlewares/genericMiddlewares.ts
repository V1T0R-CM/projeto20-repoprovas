import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/token";


export function tokenMiddlewareValidation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const account = verifyToken(token);

    if (!account) throw { code: "Unauthorized", message: "Token invalido" };

    res.locals.account = account;
    next()
}