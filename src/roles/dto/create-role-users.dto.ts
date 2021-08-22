import { User } from 'src/users/entities/user.entity';
import { Role } from '../entities/role.entity';

export class CreateRoleUsersDto {
  user: User;
  role: Role;
}
