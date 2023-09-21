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

@Module({
  imports: [DemoModule, UserModule, UploadModule, LoginModule, GuardModule],
  controllers: [AppController, DemoController, UploadController],
  providers: [
    AppService,
    UploadService,
    {
      provide: 'Earl',
      useClass: AppService,
    },
    {
      provide: 'shop',
      useValue: ['shop1', 'shop2', 'shop3']
    },
    {
      provide: 'factory',
      inject: [AppService],
      useFactory(appService: AppService) {
        return appService.getHello();
      },
    },
  ],
})
export class AppModule {}
