import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/modules/auth/shared/jwt-auth.guard';
import { Roles } from 'src/validation/roles.decorator';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

import { UsersService } from '../services/users.service';
import { RolesService } from 'src/modules/roles/services/roles.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly rolesservice: RolesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @Post()
  @ApiCreatedResponse({
    description: 'Criado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'As informações enviadas são inválidas ou insuficientes',
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    const role = await this.rolesservice.findOne(createUserDto.role_id);
    await this.usersService.verifyIfExistsEmail(createUserDto.email);

    const user = await this.usersService.create({ ...createUserDto, role });

    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({
    description: 'Retorna todas os usuários',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'ok',
  })
  @ApiNotFoundResponse({
    description: 'Não foi encontrado um usuário para o id informado',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
function CurrentUser() {
  throw new Error('Function not implemented.');
}
