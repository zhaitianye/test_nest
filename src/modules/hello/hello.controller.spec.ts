import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('HELLO模块', () => {
  let controller: HelloController;
  let service: HelloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    controller = module.get<HelloController>(HelloController);
    service = module.get<HelloService>(HelloService);
  });

  describe('controller', () => {
    it('findAll', async () => {
      const obj = { msg: 'This action returns all hello'};
      const result = await controller.findAll();
      expect(result).toEqual(obj);
    });
    it('create', async () => {
      let str = 'This action adds a new cat'
      const result = await controller.create();
      expect(result).toBe(str);
    });
    it('redirect 有目标值', async () => {
      const result = await controller.redirect( { version:5 } );
      expect(result).toBeUndefined;
    });
    it('redirect 无目标值', async () => {
      const result = await controller.redirect( { version:1 } );
      expect(result).toBeUndefined;
    });
    it('redirect 无值', async () => {
      const result = await controller.redirect( { version: undefined } );
      expect(result).toBeUndefined;
    });
    it('findOne', async () => {
      let id = 1;
      let str = `This action returns a ${id} cat`
      const result = await controller.findOne({ id });
      expect(result).toBe(str);
    });
    it('findOne2', async () => {
      let id = 1;
      let str = `This action returns a ${id} cat`
      const result = await controller.findOne({ id });
      expect(result).toBe(str);
    });
    it('createDto', async () => {
      let str = `use dto`
      // 在创建完毕DTO之后，所传递参数必须按照定义去完成，否则则会编辑器提示
      const result = await controller.createDto({ 
        age: 123,
        name: '123',
        breed: '123',
      });
      expect(result).toBe(str);
    });
    it('updatePut', async () => {
      let id = '123';
      let str = `This action updates a ${id} cat`
      // 在创建完毕DTO之后，所传递参数必须按照定义去完成，否则则会编辑器提示
      const result = await controller.updatePut( id , { 
        age: 123,
        name: '123',
      });
      expect(result).toBe(str);
    });
  });

  describe('service模块', () => {
    it('test', async () => {
      let id = 1;
      let str = `Hello test! ${id}`;
      let result = await service.test(id);
      expect(result).toBe(str);
    });
  });
});