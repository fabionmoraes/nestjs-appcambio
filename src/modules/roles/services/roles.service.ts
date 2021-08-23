import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

import { Role } from '../entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    try {
      const newRole = this.roleRepository.create(createRoleDto);

      return this.roleRepository.save(newRole);
    } catch (err) {
      throw err;
    }
  }

  async findAll(): Promise<Role[]> {
    const roles = await this.roleRepository.find();

    return roles;
  }

  async findOne(id: number): Promise<Role> {
    try {
      const role = await this.roleRepository.findOneOrFail(id);
      return role;
    } catch (err) {
      if (err.name === 'EntityNotFoundError') {
        throw new HttpException('Role não encontrado.', 400);
      }
      throw err;
    }
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
