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

/*
💡 Controller 란?
 * 클라이언트로 부터 Request를 받는 역할과 동시에 클라이언트에게 Response를 하는 역할을 한다.

 - UserController 클래스에서 UserService 클래스를 인자의 타입으로 받은 뒤, 
 @Get 데코레이터를 통해서 UserService 타입 내의 getUsers()를 호출하여 받고 users에 담은 뒤 users를 리턴한다. @Render 데코레이터로 user/user-list 를 화면에 띄워준다.
 
💡 사용된 데코레이터
@Controller
 : Controller 클래스를 정의해 줄 수 있는 듯. 안에는 @Get, @Post, @Put, @Delete 등의 HTTP request 를 정의 해 줄 수 있다.

@Render
 : 사용할 템플릿 지정하고, 라우트 핸들러 메서드의 반환값을 렌더링을 위해 템플릿에 전달.
*/
