import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll();
  }
}