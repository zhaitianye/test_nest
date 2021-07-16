import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { PigsModule } from '../pigs/pigs.module';

@Module({
  imports: [PigsModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
