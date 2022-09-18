import Joi from 'joi';
import { ICreateTestsData } from '../types/testsTypes';

export const testsSchema = Joi.object<ICreateTestsData>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().required(),
    category: Joi.string().required(),
    discipline: Joi.string().required(),
    teacher: Joi.string().required()
});