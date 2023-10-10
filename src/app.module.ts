import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { LoginModule } from './login/login.module';
import { GuardModule } from './guard/guard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      username: 'root', // 账号
      password: 'huliang6014@', //密码,
      host: 'localhost',
      port: 3306,
      database: 'nestdb',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 匹配的实体文件
      synchronize: true, // 代表是否自动将实体类同步到数据库
      retryDelay: 500, // 重试链接数据库间隔,
      retryAttempts: 10, // 重试连接数据库的次数
      autoLoadEntities: true, // 为true将自动加载实体，forFeature()方法注册的每个实体都将自动添加到配置对象的实体
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
