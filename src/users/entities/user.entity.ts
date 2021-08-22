import { Customer } from 'src/customers/entities/customer.entity';
import { RoleUser } from 'src/roles/entities/roleUsers.entity';
import { Store } from 'src/stores/entities/store.entity';
import { File } from 'src/files/entities/file.entity';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateAt: Date;

  @OneToMany(type => RoleUser, roleUser => roleUser.user)
  role: RoleUser[];

  @OneToMany(type => Store, store => store.user)
  stores: Store[];

  @OneToOne(type => Customer, customer => customer.user_created)
  customerCreated: Customer;

  @OneToOne(type => Customer, customer => customer.user_updated)
  customerUpdated: Customer;

  @OneToOne(type => File, file => file.user)
  file: File;
}
