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
  writeFile(@Query('file-name')fileName: string , @Body() _body:any){
    return this.appService.writeFile(_body , fileName);
  }

  @Put('/')
  createFile(@Query('file-name')fileName: string , @Body() _body2:any){
    return this.appService.createFile(_body2 , fileName);
  }

  @Delete('/')
  deletefile(@Query('file-name')fileName: string){
    return this.appService.deleteFile(fileName);
  }
}
