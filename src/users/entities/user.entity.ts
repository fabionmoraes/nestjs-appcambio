import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Customer } from 'src/customers/entities/customer.entity';
import { RoleUser } from 'src/roles/entities/roleuser.entity';
import { Store } from 'src/stores/entities/store.entity';

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

  @OneToMany(() => RoleUser, roleUser => roleUser.user)
  role: RoleUser[];

  @OneToMany(() => Store, store => store.user)
  stores: Store[];

  @OneToOne(() => Customer, customer => customer.user_created)
  customerCreated: Customer;

  @OneToOne(() => Customer, customer => customer.user_updated)
  customerUpdated: Customer;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
