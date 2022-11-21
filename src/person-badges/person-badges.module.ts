import { Module } from '@nestjs/common';
import { PersonBadgesService } from './person-badges.service';
import { PersonBadgesController } from './person-badges.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PersonBadgesController],
  providers: [PersonBadgesService],
})
export class PersonBadgesModule {}
