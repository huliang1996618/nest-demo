import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { zip } from 'compressing';
import { Response } from 'express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  // 使用拦截器
  @UseInterceptors(FileInterceptor('file'))
  // 定义file的装饰器类型
  upload(@UploadedFile() file) {
    console.log(file);
    return '';
  }

  @Get('download')
  download(@Res() res: Response) {
    const url = join(__dirname, '../images');
    res.download(url);
  }

  // 文件流形式
  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../images');
    const stream = new zip.Stream();
    await stream.addEntry(url);
    // 返回流的时候需要设置响应头
    res.setHeader('Content-Type', 'application/octect-stream');
    //Content-Disposition 响应标头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。
    // 在 HTTP 场景中，第一个参数或者是 inline（默认值，表示回复中的消息体会以页面的一部分或者整个页面的形式展示），或者是 attachment（意味着消息体应该被下载到本地
    res.setHeader('Content-Disposition', 'attachment;filename=ssr');
  }
}
