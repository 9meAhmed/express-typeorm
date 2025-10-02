import { Repository } from "typeorm";
import { User } from "../entity/index.js";

export class UserService {
  constructor(private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async createUser(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return null;

    this.userRepository.merge(user, userData);
    await this.userRepository.save(user);
    return user;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete({ id });
    return result.affected !== 0;
  }
}
