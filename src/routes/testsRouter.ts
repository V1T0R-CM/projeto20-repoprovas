import { Router } from 'express';
import { testsValidation } from '../middlewares/testsMiddlewares';
import { createTests } from '../controllers/testsControllers';

const testsRouter = Router();
testsRouter.post("/tests", testsValidation, createTests);

export default testsRouter;