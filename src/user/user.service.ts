import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid";

@Injectable()
export class UserService {
  private users = [
    new User(uuid(), "Pikachu", 30),
    new User(uuid(), "Chairizard", 36),
    new User(uuid(), "Fletchling", 12),
  ];

  getUsers(): User[] {
    return this.users;
  }
}
