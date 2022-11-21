import { ApiProperty } from '@nestjs/swagger';

export class CreateBadgeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  img: string;
}
