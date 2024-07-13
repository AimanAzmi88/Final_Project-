import {  Router } from 'express';
import isAuth from '../middleware/isAuth.js';
import createSlot from '../controller/slot/createSlot.js'
import deleteSlot from '../controller/slot/deleteSlot.js';
import {listSlot, userSlot} from '../controller/slot/listSlot.js';
const slotRouter = Router();

slotRouter.use(isAuth);

slotRouter.get('/hello', (req, res) => {
    res.status(200).json({
        message: 'Hello from slot route',
        user: req.user
    })
});
slotRouter.post('/', createSlot,);
slotRouter.delete('/', deleteSlot);
slotRouter.get('/', listSlot);
slotRouter.get('/profile', userSlot)

export default slotRouter;