import { AppDataSource } from "../config/data-source.js";
import { User } from "../entity/index.js";
import { UserService } from "../service/user.service.js";

export const userRepository = new UserService(
  AppDataSource.getRepository(User)
);
