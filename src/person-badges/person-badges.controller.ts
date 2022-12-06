import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PersonBadgesService } from './person-badges.service';
import { CreatePersonBadgeDto } from './dto/create-person-badge.dto';
import { UpdatePersonBadgeDto } from './dto/update-person-badge.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guard';
import { PoliceGuard } from 'src/decorators/permissions/permissions.guard';
import { Permission } from 'src/decorators/permissions/permissions.decorator';
import { PermissisonEnum } from 'src/decorators/permissions/enum/permissions.enum';

@Controller('person-badges')
export class PersonBadgesController {
  constructor(private readonly personBadgesService: PersonBadgesService) {}

  @Post()
  create(@Body() createPersonBadgeDto: CreatePersonBadgeDto) {
    return this.personBadgesService.create(createPersonBadgeDto);
  }

  @Get()
  findAll() {
    return this.personBadgesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personBadgesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonBadgeDto: UpdatePersonBadgeDto) {
    return this.personBadgesService.update(+id, updatePersonBadgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personBadgesService.remove(+id);
  }
}
