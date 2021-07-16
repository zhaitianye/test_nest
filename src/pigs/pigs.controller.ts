import { Controller, Get } from '@nestjs/common';
import { PigsService } from './pigs.service';

@Controller('pigs')
export class PigsController {
  constructor(private pigsService: PigsService) {}

  @Get()
  async testModule(): Promise<any> {
    return this.pigsService.testSer();
  }
}
