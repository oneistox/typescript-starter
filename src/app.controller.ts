import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/file')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  readFile(){
    return this.appService.readFile();
    
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
