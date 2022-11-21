import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonBadgeDto } from './dto/create-person-badge.dto';
import { UpdatePersonBadgeDto } from './dto/update-person-badge.dto';

@Injectable()
export class PersonBadgesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPersonBadgeDto: CreatePersonBadgeDto) {
    return this.prisma.personBadge.create({
      data: {
        Badge: { connect: { id: createPersonBadgeDto.badgeId } },
        Person: { connect: { id: createPersonBadgeDto.personId } },
      },
      include: { Person: true, Badge: true}
    });
  }

  findAll() {
    return this.prisma.personBadge.findMany( {include: {Person: true, Badge: true }});
  }

  findOne(id: number) {
    return this.prisma.personBadge.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePersonBadgeDto: UpdatePersonBadgeDto) {
    return this.prisma.personBadge.update({
      data: {
        Badge: { connect: { id: updatePersonBadgeDto.badgeId } },
        Person: { connect: { id: updatePersonBadgeDto.personId } },
      },
      where: { id },
      include: { Person: true, Badge: true}
    });
  }

  remove(id: number) {
    return this.prisma.personBadge.delete({
      where: { id },
    });
  }
}
