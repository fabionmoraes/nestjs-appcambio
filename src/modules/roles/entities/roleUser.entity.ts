import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('role_users')
export class RoleUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, role => role.roleUsers)
  role: Role;

  @ManyToOne(() => User, user => user.role)
  user: User;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateAt: Date;
}
