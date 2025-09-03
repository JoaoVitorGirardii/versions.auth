import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as jwt from 'jsonwebtoken';
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

      const token_jwt = this.createJwt(user);

      return {
        valid: true,
        user: user,
        tokenJwt: token_jwt,
      };
    }
    return { valid: false };
  }

  private createJwt(user: UserDto) {
    const secret = process.env.SECRET_JWT as string;
    const options = {
      expiresIn: '1h',
    } as jwt.SignOptions;

    return jwt.sign(user, secret, options);
  }
}
