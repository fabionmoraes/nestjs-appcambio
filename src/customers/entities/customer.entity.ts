import { Store } from 'src/stores/entities/store.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  phone_whatsapp: string;

  @Column({ nullable: true })
  birth: Date;

  @Column({ nullable: true })
  zip_code: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  city: string;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(type => User, user => user.customerCreated, {
    onDelete: 'SET NULL',
  })
  user_created: User;

  @ManyToOne(type => User, user => user.customerUpdated, {
    onDelete: 'SET NULL',
  })
  user_updated: User;

  @ManyToOne(type => Store, store => store, { onDelete: 'SET NULL' })
  store: Store;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateAt: Date;
}
