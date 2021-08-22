import { Module } from '@nestjs/common';
import { CustomerService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomersModule {}
