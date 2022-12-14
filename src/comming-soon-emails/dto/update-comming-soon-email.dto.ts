import { PartialType } from '@nestjs/swagger';
import { CreateCommingSoonEmailDto } from './create-comming-soon-email.dto';

export class UpdateCommingSoonEmailDto extends PartialType(CreateCommingSoonEmailDto) {
    accepted: boolean;
}
