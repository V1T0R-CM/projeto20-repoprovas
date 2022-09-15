import dotenv from 'dotenv';
import app from './index.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Rodando na porta na porta: ${PORT}`))