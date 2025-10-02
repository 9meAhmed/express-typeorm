import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

enum userRoles {
  ADMIN = "admin",
  PATIENT = "patient",
  DOCTOR = "doctor",
}

@Entity({ name: "users" })
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: "enum", enum: userRoles, default: userRoles.PATIENT })
  role: userRoles;

  @Column({ default: false })
  isVerified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
