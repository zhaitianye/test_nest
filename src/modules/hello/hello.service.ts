import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

  async test(id): Promise<string> {
    return `Hello test! ${id}`;
  }


  async fetch(id): Promise<string> {
    return `Hello World! ${id}`;
  }
}
