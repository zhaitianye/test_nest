import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局使用中间件
  // app.use(logger)

  // 全局过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());

  // 全局管道
  // app.useGlobalPipes(new ValidationPipe());

  // 全局拦截器
  // app.useGlobalInterceptors(new LoggingInterceptor());
  
  // 设置swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('测试Swagger标准文档')
    .setDescription('测试Swagger标准文档的描述')
    .setVersion('1.5.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, document);



  await app.listen(3000);
}
bootstrap();
