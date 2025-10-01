import { Request, Response } from "express";
import { User } from "../entity/User.js";
import { AppDataSource } from "../config/data-source.js";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  }

  static async createUser(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const user = userRepository.create(req.body);
    await userRepository.save(user);
    res.status(201).json(user);
  }
}
