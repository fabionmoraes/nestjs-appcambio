import { Module } from '@nestjs/common';

import { StoresService } from './services/stores.service';
import { StoresController } from './controllers/stores.controller';
import { Store } from './entities/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
