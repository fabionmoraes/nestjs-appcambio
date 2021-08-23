import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/modules/auth/shared/jwt-auth.guard';
import { CustomerService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }
}
