import * as express from "express";
import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller.js";
import { userValidator } from "../middleware/user.validator.js";
const Router = express.Router();

Router.get("/users", UserController.getAllUsers);

Router.post("/users", userValidator, (req: Request, res: Response) => {
  res.send("User created");
});

export { Router as userRouter };
