import Joi from 'joi';
import { IAccountData, IRegisterAccountData } from '../types/accountTypes';

export const registerSchema = Joi.object<IRegisterAccountData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    passwordConfirmation: Joi.string().min(10).required()
});

export const loginSchema = Joi.object<IAccountData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});
