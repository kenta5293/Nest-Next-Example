import { Controller, Get, Query, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Render("Index") // 1. render 할 page 지정.
  @Get() // 2. HTTP request path 지정.
  public index(@Query("name") name?: string) {
    // 3. get `name` from query string.
    return { name }; // 4. send initial props to Render page.
  }
}

/*
Server code [Nest.js]
 * 외부로 부터 들어오는 요청은 Controller 인 AppController 에서 처리한다.

1. @Render() Decorator를 사용하여 어떤 페이지를 렌더링 할 지를 지정한다.
이 때 페이지의 기본 경로는 /pages/views/ 이다.

2. @Get() Decorator를 사용해 HTTP request 경로를 지정한다.
여기에서는 / 로 들어온 요청을 핸들링한다.

3. / 로 요청 시 query string 에서 name 의 값을 받는다.

4. query string 의 name 을 그대로 view 로 보낸다.
이는 Next.js 의 getInitialProps를 통해 받아올 수 있다.
*/
