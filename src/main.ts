import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { Response } from './common/response';
import { Filter } from './common/filter';
import { RoleGuard } from './guard/role.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // // 静态资源的访问
  // app.useStaticAssets(join(__dirname, 'images'));
  // // 使用拦截器
  // app.useGlobalInterceptors(new Response());
  // // 使用异常拦截器
  // app.useGlobalFilters(new Filter());
  // // 使用Pipe
  // app.useGlobalPipes(new ValidationPipe());
  // // 使用Guard
  // // app.useGlobalGuards(new RoleGuard());
  const options = new DocumentBuilder()
    .setTitle('Nest接口文档')
    .setDescription('接口文档Demo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-doc', app, document);
  await app.listen(3000);
}
bootstrap();
