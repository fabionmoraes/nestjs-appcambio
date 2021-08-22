import { Customer } from 'src/customers/entities/customer.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

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

  @ManyToOne(type => User, user => user.stores)
  user: User;

  @OneToMany(type => Customer, customer => customer.store)
  customers: Customer[];
}
