import {
  IsInt,
  IsString,
  MinLength,
  MaxLength,
  ValidationArguments,
} from 'class-validator';

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


// 特定管道验证
export class SpecificDtoPath {
  // 函数形式的信息
  @MinLength(2, { 
      message: (args: ValidationArguments) => {
          if (args.value.length === 1) {
              return "Too short, minimum length is 1 character";
          } else {
              return "Too short, minimum length is " + args.constraints[0] + " characters";
          }
      }
  })
  // 提示的信息
  @MaxLength(10, { // here, $constraint1 will be replaced with "50", and $value with actual supplied value
      message: "Title is too long. Maximal length is $constraint1 characters, but actual is $value"
  })
  @IsString({message: '名称需要为字符串'})
  readonly id: number;
}

// 特定管道验证
export class SpecificDtoQuery {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;
}

// 特定管道验证
export class SpecificDtoBody {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;
}

