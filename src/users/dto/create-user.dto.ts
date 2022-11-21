import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: true, default: true })
  active = true;
}
