import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/file')
  readFile(@Query('file-name') fileName: string) {
    return this.appService.readFile(fileName);
  }

  @Post('/')
  writeFile(@Body() _body:any){
    return this.appService.writeFile(_body);
  }

  @Put('/')
  updateFile(@Body() _abc:any){
    return this.appService.createFile(_abc);
  }

  @Delete('/')
  deletefile(){
    return this.appService.deleteFile();
  }
}
