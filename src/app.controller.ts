import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('imgs')
  getImgs(): any {
    return this.appService.getImg();
  }
}
