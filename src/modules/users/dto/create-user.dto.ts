import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User ID',
  })
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    description: 'User Email',
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    description: 'User Password',
  })
  @IsNotEmpty()
  @Length(8, 24)
  public password: string;

  @ApiProperty({
    description: 'User Password Confirm',
  })
  @IsNotEmpty()
  @Length(8, 24)
  public confirmed_password: string;

  @ApiProperty({
    description: 'Create Role to user',
  })
  @IsNotEmpty()
  public role_id: number;
}
