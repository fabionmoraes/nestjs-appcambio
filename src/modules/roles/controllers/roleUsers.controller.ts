import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateRoleUsersDto } from '../dto/create-role-users.dto';

import { RoleUsersService } from '../services/roleUsers.service';

@Controller('roleusers')
export class RoleUsersController {
  constructor(private readonly roleUsersService: RoleUsersService) {}

  @Post()
  create(@Body() createRoleUsersDTO: CreateRoleUsersDto) {
    return this.roleUsersService.create(createRoleUsersDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleUsersService.findOne(+id);
  }
}
