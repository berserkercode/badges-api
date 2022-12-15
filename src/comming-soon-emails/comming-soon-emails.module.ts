import { Module } from '@nestjs/common';
import { CommingSoonEmailsService } from './comming-soon-emails.service';
import { CommingSoonEmailsController } from './comming-soon-emails.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CommingSoonEmailsController],
  providers: [CommingSoonEmailsService]
})
export class CommingSoonEmailsModule {}
