import { createUserController } from "../Controller/UserController.js";

import express from 'express'

const userRoute = express.Router();

userRoute.post('/signup',createUserController);

export default userRoute