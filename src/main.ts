import { NestFactory } from "@nestjs/core";
import { RenderModule } from "nest-next";
import Next from "next";
import "reflect-metadata";
import { AppModule } from "./application.module";

async function bootstrap() {
  const dev = process.env.NODE_ENV !== "production";
  const app = Next({ dev }); // create Next.js app

  await app.prepare();

  // create Nest.js app using AppModule(contains RenderModule)
  const server = await NestFactory.create(AppModule);

  // get registered RenderModule in Nest.js app
  const renderer = server.get(RenderModule);
  // bind Nest.js app and Next.js app
  renderer.register(server, app);

  await server.listen(3002);
}

bootstrap();

/*
main.ts

npm dev 를 실행하면 /src/main.ts 가 실행된다.
정확히는 main.ts의 bootstrap 함수가 실행되며, 이 함수에서 Nest.js app 과 Next.js app을 생성하고, 
RenderModule 이 두 app을 binding 한다. 마지막으로 3002 PORT를 listening 한다.
*/
