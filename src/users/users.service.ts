import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = this.usersRepository.create(createUserDto);
      return this.usersRepository.save(newUser);
    } catch (err) {
      throw new HttpException('error', 400);
    }
  }

  async verifyIfExistsEmail(email: string): Promise<void> {
    const userExists = await this.usersRepository.findOne({
      email,
    });

    if (userExists) {
      throw new HttpException('Já existe esse email', 400);
    }
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(id);

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

    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);

    return this.usersRepository.remove(user);
  }

  // customQuery(): any {
  //   return this.usersRepository.createQueryBuilder('user');
  // }
}
