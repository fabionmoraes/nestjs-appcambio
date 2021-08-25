import { CoinsController } from './controllers/coins.controller';
import { Module } from '@nestjs/common';

import { CoinsService } from './services/coins.service';

@Module({
  imports: [],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
