import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new store';
  }

  findAll() {
    return `This action returns all stores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
