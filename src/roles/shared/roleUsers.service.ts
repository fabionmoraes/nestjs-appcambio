import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoleUsersDto } from '../dto/create-role-users.dto';

import { RoleUser } from '../entities/roleuser.entity';

@Injectable()
export class RoleUsersService {
  constructor(
    @InjectRepository(RoleUser)
    private roleUserRepository: Repository<RoleUser>,
  ) {}

  create(createRoleUsersDto: CreateRoleUsersDto): Promise<RoleUser> {
    try {
      const newRoleUser = this.roleUserRepository.create(createRoleUsersDto);

      return this.roleUserRepository.save(newRoleUser);
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<RoleUser> {
    if (!id) {
      throw new HttpException('RoleId Vázio', 400);
    }

    const roleUser = await this.roleUserRepository.findOneOrFail(id);

    return roleUser;
  }
}
