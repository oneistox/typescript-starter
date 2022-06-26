import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('file')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  readFile(){
    return this.appService.readFile();
  }

  @Post('/')
  createFile(){
    //return this.appService.createFile();
  }

  @Put('/')
  updateFile(){
    return this.appService.writeFile();
  }

}
