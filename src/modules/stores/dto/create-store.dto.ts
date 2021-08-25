import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStoreDto {
  @ApiProperty({
    description: 'Store Name',
  })
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    description: 'Store CNPJ',
  })
  @IsNotEmpty()
  public cnpj: string;

  @ApiProperty({
    description: 'Store Company',
  })
  @IsNotEmpty()
  public company: string;

  @ApiProperty({
    description: 'Store Address',
  })
  @IsNotEmpty()
  public address: string;

  @ApiProperty({
    description: 'Store State',
  })
  @IsNotEmpty()
  public state: string;

  @ApiProperty({
    description: 'Store City',
  })
  @IsNotEmpty()
  public city: string;

  @ApiProperty({
    description: 'send_sms',
  })
  @IsNotEmpty()
  public send_sms: string;
}
