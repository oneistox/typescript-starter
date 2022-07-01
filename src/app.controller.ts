import { Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/file')
  readFile(@Query('file-name') fileName: string) {
    return this.appService.readFile(fileName);
  }

  @Post('/')
  writeFile(){
    return this.appService.writeFile();
  }

  @Put('/')
  updateFile(){
    return this.appService.createFile();
  }
}
