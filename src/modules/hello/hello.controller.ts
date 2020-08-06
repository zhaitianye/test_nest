import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
  Redirect
} from '@nestjs/common';

import { HelloService } from './hello.service';
import { CreateCatDto, UpdateCatDto } from './hello.dto';

// 按模块划分，这一级别不能直接请求
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 简单get，无参数
  @Get('cats')
  async findAll(): Promise<Object> {
    // const retult = await this.helloService.fetch(id);
    return { msg: 'This action returns all hello' }
  }

  // 简单post，无参数
  @Post('cats')
  async create(): Promise<string> {
    return 'This action adds a new cat';
  }

  // 重定向,返回的值会覆盖重定向的值
  @Get('redirect')
  @Redirect('https://www.baidu.com')
  redirect(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://www.360.com' };
    }
  }

  // 指定id，指定路径
  @Get('cats/:id')
  findOne(@Param() params): string {
    return `This action returns a ${params.id} cat`;
  }

  // 指定id，指定路径2
  @Get('cats2/:id')
  findOne2(@Param('id') id): string {
    return `This action returns a ${id} cat`;
  }

  // 使用dto
  @Post('cats/dto')
  async createDto(@Body() payload: CreateCatDto): Promise<string> {
    return 'use dto';
  }

  // put修改,使用put的dto
  @Put('cats/:id')
  updatePut(@Param('id') id: string, @Body() payload: UpdateCatDto) {
    return `This action updates a ${id} cat`;
  }
}