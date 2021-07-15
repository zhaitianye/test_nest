import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
