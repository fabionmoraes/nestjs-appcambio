import { Module } from '@nestjs/common';

import { RolesController } from './controllers/roles.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Role } from './entities/role.entity';
import { RoleUser } from './entities/roleuser.entity';

import { RolesService } from './shared/roles.service';
import { RoleUsersService } from './shared/roleUsers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RoleUser])],
  controllers: [RolesController],
  providers: [RolesService, RoleUsersService],
  exports: [RoleUsersService, RolesService],
})
export class RolesModule {}
