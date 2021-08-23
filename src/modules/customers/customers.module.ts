import { Module } from '@nestjs/common';
import { CustomerService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';

@Module({
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomersModule {}
