import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommingSoonEmailDto } from './dto/create-comming-soon-email.dto';
import { UpdateCommingSoonEmailDto } from './dto/update-comming-soon-email.dto';

@Injectable()
export class CommingSoonEmailsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  create(createCommingSoonEmailDto: CreateCommingSoonEmailDto) {
    return this.prisma.commingSoonEmail.create({ data: createCommingSoonEmailDto });
  }

  findAll() {
    return this.prisma.commingSoonEmail.findMany();
  }

  findOne(id: number) {
    return this.prisma.commingSoonEmail.findUnique({ where: { id } });
  }

  update(id: number, updateCommingSoonEmailDto: UpdateCommingSoonEmailDto) {
    return this.prisma.commingSoonEmail.update({
      where: { id },
      data: updateCommingSoonEmailDto,
    });
  }

  remove(id: number) {
    return this.prisma.commingSoonEmail.delete({ where: { id } });
  }
}
