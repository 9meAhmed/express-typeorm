import * as express from "express";
import { UserController } from "../controllers/user.controller.js";
import { userValidator } from "../middleware/user.validator.js";
const Router = express.Router();

Router.get("/users", UserController.getAllUsers);
Router.post("/users", userValidator, UserController.createUser);
Router.put("/users/:id", userValidator, UserController.updateUser);

export { Router as userRouter };
