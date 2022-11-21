import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BadgesService } from './badges.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';

@Controller('badges')
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createBadgeDto: CreateBadgeDto, @UploadedFile() file) {
    return this.badgesService.create(createBadgeDto, file);
  }

  @Get()
  findAll() {
    return this.badgesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.badgesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBadgeDto: UpdateBadgeDto) {
    return this.badgesService.update(+id, updateBadgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.badgesService.remove(+id);
  }
}
