import { Module } from '@nestjs/common';
import { CommingSoonEmailsService } from './comming-soon-emails.service';
import { CommingSoonEmailsController } from './comming-soon-emails.controller';

@Module({
  controllers: [CommingSoonEmailsController],
  providers: [CommingSoonEmailsService]
})
export class CommingSoonEmailsModule {}
