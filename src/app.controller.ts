import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// 引入service结构
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
