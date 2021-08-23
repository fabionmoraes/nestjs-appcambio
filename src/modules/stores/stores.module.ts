import { Module } from '@nestjs/common';

import { StoresService } from './services/stores.service';
import { StoresController } from './controllers/stores.controller';

@Module({
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
