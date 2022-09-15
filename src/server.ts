import dotenv from 'dotenv';
import app from './index';
dotenv.config();

const PORT = process.env.PORT || 5000;
console.log(process.env.DATABASE_URL)

app.listen(PORT, () => console.log(`Rodando na porta na porta: ${PORT}`))