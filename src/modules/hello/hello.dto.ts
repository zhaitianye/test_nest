import { IsInt, IsString } from 'class-validator';

// DTO 的作用是规范数据模型，不进行验证
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}


// 多个DTO可以依次导出
export class UpdateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;
}
