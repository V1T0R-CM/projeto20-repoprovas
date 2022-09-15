import cors from 'cors';
import express from 'express';
import dotenv from "dotenv";
import "express-async-errors";
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json());
app.use(errorHandler);

export default app;