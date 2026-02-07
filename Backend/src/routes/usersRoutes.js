import {Router} from "express";
import { register } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
const router =Router();


router.route("/login").post(login);
router.route("/register").post(register);

export default router;