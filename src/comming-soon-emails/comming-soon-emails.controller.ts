import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommingSoonEmailsService } from './comming-soon-emails.service';
import { CreateCommingSoonEmailDto } from './dto/create-comming-soon-email.dto';
import { UpdateCommingSoonEmailDto } from './dto/update-comming-soon-email.dto';

@Controller('comming-soon-emails')
export class CommingSoonEmailsController {
  constructor(private readonly commingSoonEmailsService: CommingSoonEmailsService) {}

  @Post()
  create(@Body() createCommingSoonEmailDto: CreateCommingSoonEmailDto) {
    return this.commingSoonEmailsService.create(createCommingSoonEmailDto);
  }

  @Get()
  findAll() {
    return this.commingSoonEmailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commingSoonEmailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommingSoonEmailDto: UpdateCommingSoonEmailDto) {
    return this.commingSoonEmailsService.update(+id, updateCommingSoonEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commingSoonEmailsService.remove(+id);
  }
}
