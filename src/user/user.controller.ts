import { Controller, Get, Render } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Render("user/user-list")
  @Get()
  userList(): User[] {
    const users = this.userService.getUsers();
    return { users };
  }
}
