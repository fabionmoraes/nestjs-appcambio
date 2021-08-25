import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Customer } from 'src/modules/customers/entities/customer.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Store } from 'src/modules/stores/entities/store.entity';
import { File } from 'src/modules/files/entities/file.entity';
import { Sale } from 'src/modules/sales/entities/sales.entity';

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

  @ManyToOne(() => Role, role => role.user)
  role: Role;

  @ManyToOne(() => Store, store => store.user)
  store: Store;

  @OneToOne(() => Customer, customer => customer.user_created)
  customerCreated: Customer;

  @OneToOne(() => Customer, customer => customer.user_updated)
  customerUpdated: Customer;

  @ManyToOne(() => File, file => file.user, { onDelete: 'SET NULL' })
  file: File;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @OneToMany(() => Sale, sale => sale.user)
  sales: Sale;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
