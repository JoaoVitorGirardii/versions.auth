import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CommandsAuth } from './const/commandsAuth.const';
import { AuthLoginDto } from './dto/request/authLogin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ command: CommandsAuth.LOGIN })
  userLogin(payload: AuthLoginDto) {
    return this.appService.userLogin(payload);
  }
}
