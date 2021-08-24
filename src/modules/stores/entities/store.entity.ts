import { Customer } from 'src/modules/customers/entities/customer.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { File } from 'src/modules/files/entities/file.entity';

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  cnpj: string;

  @Column()
  company: string;

  @Column({
    nullable: true,
  })
  company_name: string;

  @Column({
    nullable: true,
  })
  zip_code: string;

  @Column()
  address: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column({
    nullable: true,
  })
  phone: string;

  @Column({
    nullable: true,
  })
  email: string;

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateAt: Date;

  @ManyToOne(() => User, user => user.stores)
  user: User;

  @OneToMany(() => Customer, customer => customer.store)
  customers: Customer[];

  @ManyToOne(() => File, file => file.store, { onDelete: 'SET NULL' })
  file: File;
}
