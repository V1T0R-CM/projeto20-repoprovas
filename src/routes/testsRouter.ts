import { Router } from 'express';
import { testsValidation } from '../middlewares/testsMiddlewares';
import { tokenMiddlewareValidation } from '../middlewares/genericMiddlewares';
import { createTests, getTestsByDiscipline, getTestsByTeachers } from '../controllers/testsControllers';

const testsRouter = Router();
testsRouter.post("/tests", tokenMiddlewareValidation, testsValidation, createTests);
testsRouter.get("/disciplines/tests", tokenMiddlewareValidation, getTestsByDiscipline);
testsRouter.get("/teachers/tests", tokenMiddlewareValidation, getTestsByTeachers);

export default testsRouter;