import { Router } from 'express';
import { testsValidation } from '../middlewares/testsMiddlewares';
import { tokenMiddlewareValidation } from '../middlewares/genericMiddlewares';
import { createTests, getTestsByDiscipline } from '../controllers/testsControllers';

const testsRouter = Router();
testsRouter.post("/tests", tokenMiddlewareValidation, testsValidation, createTests);
testsRouter.get("/disciplines/tests", tokenMiddlewareValidation, getTestsByDiscipline);

export default testsRouter;