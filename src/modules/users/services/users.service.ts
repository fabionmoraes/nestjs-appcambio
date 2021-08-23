import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(create: ICreateUser): Promise<User> {
    try {
      const newUser = this.userRepository.create(create);
      return this.userRepository.save(newUser);
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
    const users = await this.userRepository.find({ relations: ['role'] });
    return users;
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id);

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
