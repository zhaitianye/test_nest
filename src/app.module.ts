import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [
    HelloModule,
  ],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('hello');
  }
}
