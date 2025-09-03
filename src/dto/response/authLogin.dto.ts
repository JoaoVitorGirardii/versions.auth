export class AuthLoginResponseDto {
  valid: boolean;
  user?: UserDto;
  tokenJwt?: string;
}

export class UserDto {
  id: string;
  name: string;
  email: string;
  password?: string;
}
