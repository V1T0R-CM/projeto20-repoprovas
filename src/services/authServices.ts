import * as authRepositories from "../repositories/authRepositories";
import { IAccountData } from "../types/accountTypes";
import { generateToken } from "../utils/token";
import bcrypt from "bcrypt";

export async function registerAccount(accontData: IAccountData) {
    const user = await authRepositories.getByEmail(accontData.email);
    const passwordHash = bcrypt.hashSync(accontData.password, 10);
    if (user) throw { code: "Conflict", message: "Email já esta cadastrado" };

    await authRepositories.insert({ email: accontData.email, password: passwordHash });
}

export async function loginAccount(accontData: IAccountData) {
    const user = await authRepositories.getByEmail(accontData.email);

    if (!user) throw { code: "Unauthorized", message: "Credenciais invalidas" };
    if (!bcrypt.compareSync(accontData.password, user.password)) throw { code: "Unauthorized", message: "Credenciais invalidas" }

    return { token: generateToken(user.id, user.email) }
}