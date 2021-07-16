import { Injectable } from '@nestjs/common';

@Injectable()
export class PigsService {
  testSer(): string {
    return 'this is a test';
  }
}
