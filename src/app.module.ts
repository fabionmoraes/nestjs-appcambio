import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { StoresModule } from './stores/stores.module';
import { CustomersModule } from './customers/customers.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    RolesModule,
    StoresModule,
    CustomersModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
