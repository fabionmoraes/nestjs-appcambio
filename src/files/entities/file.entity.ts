import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  file: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  subtype: string;

  @ManyToOne(type => User, user => user.file)
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
