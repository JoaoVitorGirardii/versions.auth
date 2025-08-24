import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CommandsUsuario } from './const/commandsUsuario.const';
import { AuthLoginDto } from './dto/request/authLogin.dto';
import { AuthLoginResponseDto, UserDto } from './dto/response/authLogin.dto';

@Injectable()
export class AppService {
  constructor(@Inject('USUARIO_SERVICE') private clientProxy: ClientProxy) {}

  async userLogin(payload: AuthLoginDto): Promise<AuthLoginResponseDto> {
    const user = await firstValueFrom<UserDto>(
      this.clientProxy.send(
        { command: CommandsUsuario.GET_USUARIO_LOGIN },
        payload.user,
      ),
    );

    if (payload.password === user.password) {
      //remove a senha do usuário
      delete user.password;

      return {
        valid: true,
        user: user,
      };
    }
    return { valid: false };
  }
}
