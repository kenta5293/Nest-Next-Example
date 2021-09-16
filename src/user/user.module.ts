import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

/*
💡 Module
 * Module은 @Module이라는 데코레이터에게 어노테이트 된 클래스로, Nest가 앱의 구조를 조직할 수 있는 메타데이터를 제공해준다.

 @Module
 : @Module 데코레이터는 가장 아랫줄의 export UserModule을 꾸며준다. 즉, @Module 데코레이터가 UserModule을 꾸며주고 있다고 볼 수 있다.
 
 @Module()의 인자에서 갖는 객체
  - providers: Nest의 injector에 의해 인스턴스화 되고, 그 인스턴스들은 이 모듈 안에서 최소한으로 공유.
  - controllers: 해당 모듈에서 정의된, 인스턴스화 되어야 하는 컨트롤러들의 모음.
  - imports: 임포트된 모듈들의 리스트로 이 리스트의 모듈들은 데코레이터에 사용 중인 모듈에서 필요한 providers를 export하고 있어야 한다.
  - exports: providers의 하위 집합으로, 데코레이터를 사용 중인 모듈이 제공받은 Provider의 일부를 내보낼 수 있다.


[참고]
https://changhoi.github.io/posts/backend/nestjs-quicklearn-03/
*/
