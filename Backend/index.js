import express from 'express';
const app = express();
import { databaseInit } from './database/connection.js';
import healthController from './controller/health.js';
import createUser from './controller/user/register.js';
import login from './controller/user/login.js';
import userRouter from './router/user.js'
import slotRouter from './router/router.slot.js';
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


databaseInit();
app.get('/', healthController.get);
app.post('/', healthController.post);

app.post('/register', createUser);
app.post('/login', login);

app.use('/user',userRouter)
app.use('/slot', slotRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});