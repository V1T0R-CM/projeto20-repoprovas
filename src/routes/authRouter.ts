import { Router } from 'express';
import { signUp, signIn } from '../controllers/authControllers';
import { registerValidation, loginValidation } from '../middlewares/authMiddlewares';

const authRouter = Router();
authRouter.post("/signup", registerValidation, signUp);
authRouter.post("/signin", loginValidation, signIn);

export default authRouter;