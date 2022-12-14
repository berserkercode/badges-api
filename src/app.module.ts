import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BadgesModule } from './badges/badges.module';
import { PeopleModule } from './people/people.module';
import { PersonBadgesModule } from './person-badges/person-badges.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CommingSoonEmailsModule } from './comming-soon-emails/comming-soon-emails.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, PeopleModule, BadgesModule, PersonBadgesModule, CommingSoonEmailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
