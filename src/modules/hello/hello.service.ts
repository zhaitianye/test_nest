import { Injectable } from '@nestjs/common';
import { Cat } from './hello.interface';

@Injectable()
export class HelloService {
  private readonly cats: Cat[] = [];

  // 服务应该是无状态的，但是这个状态保存在内存里面，不清楚为啥要这样用
  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }


  async test(id: string): Promise<string> {
    return `Hello test! ${id}`;
  }


  async fetch(id: string): Promise<string> {
    return `Hello World! ${id}`;
  }

  async errorTest(): Promise<Record<string, any>> {
    throw new Error('这个是随便抛出的错误');
    return;
  }
}
