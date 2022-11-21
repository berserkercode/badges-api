import { ApiProperty } from '@nestjs/swagger';
import { Badge, Person } from '@prisma/client';

export class CreatePersonBadgeDto {
  @ApiProperty()
  badgeId: number;

  @ApiProperty()
  personId: number;
}
