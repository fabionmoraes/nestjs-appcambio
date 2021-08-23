import { Module } from '@nestjs/common';

import { StoresService } from './shared/stores.service';
import { StoresController } from './controllers/stores.controller';

@Module({
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
