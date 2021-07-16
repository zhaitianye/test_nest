import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/dogs.dto';
import { Dog } from './interfaces/dogs.interface';
import { PigsService } from '../pigs/pigs.service';

@Controller('dogs')
export class DogsController {
  constructor(
    private dogsService: DogsService,
    private pigsService: PigsService,
  ) {}

  @Get('test')
  async getName1(): Promise<string> {
    return `functionName1 This action returns all dogs`;
  }

  @Get('test2')
  async getName2(): Promise<string> {
    return this.pigsService.testSer();
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
