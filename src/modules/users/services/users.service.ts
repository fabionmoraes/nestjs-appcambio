import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Store } from 'src/modules/stores/entities/store.entity';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  role: Role;
  store?: Store;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(create: ICreateUser): Promise<User> {
    try {
      const newUser = this.userRepository.create(create);
      const user = await this.userRepository.save(newUser);
      delete user.password;
      return user;
    } catch (err) {
      throw new HttpException('error', 400);
    }
  }

  async verifyIfExistsEmail(email: string): Promise<void> {
    const userExists = await this.userRepository.findOne({
      email,
    });

    if (userExists) {
      throw new HttpException('Já existe esse email', 400);
    }
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({ email });
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find({
      relations: ['role', 'store'],
    });
    return users;
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id, {
        relations: ['role', 'store'],
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    const { name, email } = updateUserDto;

    user.name = name;
    user.email = email;

    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);

    return this.userRepository.remove(user);
  }

  // customQuery(): any {
  //   return this.userRepository.createQueryBuilder('user');
  // }
}
