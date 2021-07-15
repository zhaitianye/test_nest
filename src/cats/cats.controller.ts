// 教程部分的控制器的部分
import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Redirect,
  Query,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto, UpdateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Get()
  getName1(): string {
    return `functionName1 This action returns all cats`;
  }

  @Get('111')
  getName2(@Req() request: Request): string {
    return `functionName2 This action returns all cats ${JSON.stringify(
      request.query,
    )}`;
  }

  @Get('ab*cd')
  getName3(): string {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getName4(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('111/:id')
  getName5(@Param() params): string {
    return `This action returns a #${params.id} cat`;
  }

  @Get('async')
  async getName6(): Promise<string> {
    return `This action returns a cat`;
  }

  @Get('res')
  getName7(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      key: 123,
      value: 123123,
    });
  }

  @Get('res2')
  getName9(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return {
      key: 123,
      value: 123123,
    };
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Post('dto')
  async postFunction2(@Body() createCatDto: CreateCatDto) {
    return {
      name: createCatDto.name,
      age: createCatDto.age + 1,
      breed: createCatDto.breed,
    };
  }

  @Put('put/:id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat ${updateCatDto.age}`;
  }

  @Delete('put/:id')
  remove(@Param('id') id: string) {
    console.log(HttpStatus);
    return `This action removes a #${id} cat`;
  }
}
