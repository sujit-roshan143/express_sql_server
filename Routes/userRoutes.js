import { createUserController, deleteuserController, getAllUserController, updateuserPasswordsController} from "../Controller/UserController.js";

import express from 'express'

const userRoute = express.Router();

//to controller for routes purpose
userRoute.post('/signup',createUserController);
userRoute.get('/getusers',getAllUserController);
userRoute.put('/updatepass/:id',updateuserPasswordsController)
userRoute.delete('/del/:id',deleteuserController)


export default userRoute