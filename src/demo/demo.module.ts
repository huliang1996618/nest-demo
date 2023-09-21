import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DemoService } from './demo.service';
import { Middleware } from 'src/middleware';

@Module({
  providers: [DemoService],
})
export class DemoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware).forRoutes('demo');
  }
}
