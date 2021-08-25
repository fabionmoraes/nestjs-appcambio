import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

import { Coin } from 'src/modules/coins/entities/coins.entity';
import { Store } from 'src/modules/stores/entities/store.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  icon: string;

  @Column('float')
  tax_coin: number;

  @Column('float')
  buy_coin: number;

  @Column('float')
  sale: number;

  @Column()
  type_sale: string;

  @ManyToOne(() => Coin, coin => coin.sales, { onDelete: 'SET NULL' })
  coin: Coin;

  @ManyToOne(() => Store, store => store.sales, { onDelete: 'SET NULL' })
  store: Store;

  @ManyToOne(() => User, user => user.sales, { onDelete: 'SET NULL' })
  user: User;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
