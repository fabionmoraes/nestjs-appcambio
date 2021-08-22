import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

import { UsersService } from './shared/users.service';
import { CreateUserAndRoleDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleUsersService } from 'src/roles/shared/roleUsers.service';
import { RolesService } from 'src/roles/shared/roles.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly roleUserService: RoleUsersService,
    private readonly roleService: RolesService,
  ) {}

  @Post()
  async create(@Body() createUserAndRoleDto: CreateUserAndRoleDto) {
    const { user: userDto, roleId } = createUserAndRoleDto;

    const role = await this.roleService.findOne(+roleId);

    await this.usersService.verifyIfExistsEmail(userDto.email);

    const user = await this.usersService.create(userDto);

    this.roleUserService.create({ role, user });

    return this.usersService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
