import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, RolesModule, StoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
