import { PartialType } from '@nestjs/swagger';
import { CreatePersonBadgeDto } from './create-person-badge.dto';

export class UpdatePersonBadgeDto extends PartialType(CreatePersonBadgeDto) {}
