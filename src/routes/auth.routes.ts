import * as express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { userValidator, loginValidator } from "../middleware/index.js";
const Router = express.Router();

Router.post("/login", loginValidator, AuthController.loginUser);
Router.post("/register", userValidator, AuthController.registerUser);

export { Router as authRouter };
