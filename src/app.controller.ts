import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
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
  updateFile(){
    return this.appService.createFile();
  }
}
