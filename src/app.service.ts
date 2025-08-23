import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AuthLoginDto } from './dto/request/authLogin.dto';
import { AuthLoginResponseDto } from './dto/response/authLogin.dto';

@Injectable()
export class AppService {
  userLogin(payload: AuthLoginDto): AuthLoginResponseDto {
    console.log('chegou aqui: ', payload);

    if (payload.user === 'login@email.com' && payload.password === '1234') {
      return {
        valid: true,
        user: {
          id: randomUUID(),
          name: 'nome do usuário',
        },
      };
    }
    return { valid: false };
  }
}
