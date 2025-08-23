export class AuthLoginResponseDto {
  valid: boolean;
  user?: UserDto;
}

class UserDto {
  id: string;
  name: string;
}
