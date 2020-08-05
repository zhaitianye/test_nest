import {
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
} from '@nestjs/common';

import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';


import { HelloService } from './hello.service';
import { Hello, HelloPost, UserRole } from './classes/hello';
import { CreateCatDto } from './dto/create-hello.dto';

@ApiTags('hello')
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  
  // 查询
  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'id', required: true })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: '正确返回',
    type: Hello,
  })
  fetch(@Query() { id }, @Headers('Authorization') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }

  // 创建
  @Post()
  @ApiBody({ description: '填写更新内容' })
  @ApiResponse({
    status: 200,
    description: '正确创建返回',
    type: HelloPost,
  })
  @ApiResponse({
    status: 500,
    description: '错误创建返回',
    type: HelloPost,
  })
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }

  // 更新
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }


  @Post('123')
  @ApiBody({ description: '填写更新内容', type: [CreateCatDto] })
  async test(@Body() { message }, createCatDto: CreateCatDto) {
    return this.helloService.save(message);
  }
}