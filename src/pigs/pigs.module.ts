import { Module, Global } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { PigsController } from './pigs.controller';

@Global()
@Module({
  imports: [],
  controllers: [PigsController],
  providers: [PigsService],
  exports: [PigsService],
})
export class PigsModule {}
