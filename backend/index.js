import Express from 'express';
import dotenv from 'dotenv';
import { loginHandler } from './src/controllers/login.controller.js';


dotenv.config();

const app = Express();
app.use(Express.json())

app.post('/login', loginHandler);

app.listen(3000, () =>{
    console.log("Servidor funcionando, http://localhost:3000")
});

