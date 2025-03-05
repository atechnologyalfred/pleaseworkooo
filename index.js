import express from 'express';
import cors from 'cors';
import router from './routes/route.js';
const app = express();
const PORT = 10000;
app.use(cors());
app.use(express.json());
app.use('/', router)


app.listen(PORT, ()=> {

console.log(`Server is working on port ${PORT}`)
})