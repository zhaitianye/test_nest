import { Module, Global } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

// 如果启用global，则是全局模块，全局模块应该只注册一次。由根节点主模块进行注册使用
// @Global()
@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
  // 这里可以导出,外部只要引用了hellomodule这个模块，都可以访问到这个service
  // exports: [HelloService] 
})
export class HelloModule {
  // 如果用于配置目的等，提供者也可以注入到模块(类)中,这里是依赖注入概念
  // constructor(private readonly helloService: HelloService) {}
}
