import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // 通过plainToInstance将DTO实例化，metadata.metatype即为class CreateLoginDto
    const DTO = plainToInstance(metadata.metatype, value);
    // 通过validate验证
    const error = await validate(DTO);
    if (error.length) {
      throw new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
    return value;
  }
}
