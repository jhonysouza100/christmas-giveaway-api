import {Router} from "express";
import { createNewUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.js";

const router = new Router();

router.get('/', getAllUsers );

router.post('/', createNewUser );

router.put('/', updateUser);

router.delete('/', deleteUser);

export default router;
