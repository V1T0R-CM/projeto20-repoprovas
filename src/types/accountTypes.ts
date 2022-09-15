import { Accounts } from "@prisma/client";

export type IAccountData = Omit<Accounts, "id">;
export type IRegisterAccountData = { email: string; password: string; passwordConfirmation: string }