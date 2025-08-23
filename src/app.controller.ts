import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AuthLoginDto } from './dto/request/authLogin.dto';
import { Commands } from './enum/commands.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ command: Commands.USER_LOGIN })
  userLogin(payload: AuthLoginDto) {
    return this.appService.userLogin(payload);
  }
}
