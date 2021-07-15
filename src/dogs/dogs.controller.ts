import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/dogs.dto';
import { Dog } from './interfaces/dogs.interface';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get('test')
  async getName1(): Promise<string> {
    return `functionName1 This action returns all dogs`;
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }
}
