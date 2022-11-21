import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPersonDto: CreatePersonDto) {
    return this.prisma.person.create({ data: createPersonDto });
  }

  findAll() {
    return this.prisma.person.findMany( { include: { User: true } } );
  }

  findOne(id: number) {
    return this.prisma.person.findUnique({ where: { id } });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.prisma.person.update({
      where: { id },
      data: updatePersonDto,
    });
  }

  remove(id: number) {
    return this.prisma.person.delete({ where: { id } });
  }
}
