import cors from 'cors';
import express from 'express';
import dotenv from "dotenv";
import "express-async-errors";
import errorHandler from './middlewares/errorHandler';
import router from './routes/index';

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;