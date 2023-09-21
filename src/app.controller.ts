import { Controller, Get, Inject, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('get')
export class AppController {
  constructor(
    @Inject('Earl') private readonly appService: AppService,
    @Inject('shop') private readonly shop: string[],
    @Inject('factory') private readonly factory: string[],
  ) {}

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getShop(): string[] {
    return this.shop;
  }
}
