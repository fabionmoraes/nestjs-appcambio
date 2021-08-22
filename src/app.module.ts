import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { StoresModule } from './stores/stores.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    RolesModule,
    StoresModule,
    CustomersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
