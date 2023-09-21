import { IsNotEmpty, IsString, IsNumber, Length } from 'class-validator';
export class CreateLoginDto {
  // 是否为空
  @IsNotEmpty()
  @IsString()
  @Length(5, 10, {
    message: '最长长度为10',
  })
  name: string;
  @IsNumber()
  age: number;
}
