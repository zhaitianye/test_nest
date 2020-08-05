import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsInt()
  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  readonly age: number;

  @IsString()
  @ApiProperty()
  readonly breed: string;
}
