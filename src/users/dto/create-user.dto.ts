export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export class CreateUserAndRoleDto {
  user: CreateUserDto;
  roleId: number;
}
