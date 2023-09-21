import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { extname, join } from 'path';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // 设置存储目录
        destination: join(__dirname, '../images'),
        // 自定义文件名
        filename: (_, file, callback) => {
          // 时间戳 + 文件后缀名
          const filename = `${
            new Date().getTime() + extname(file.originalname)
          }`;
          return callback(null, filename);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
