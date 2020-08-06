import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 使用全局管道
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
