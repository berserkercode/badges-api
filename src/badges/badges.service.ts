import { HttpException, Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import * as AWS from 'aws-sdk';

@Injectable()
export class BadgesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBadgeDto: CreateBadgeDto, file) {

    const badgeExists = await this.prisma.badge.findFirst({ where: { name: createBadgeDto.name}});

    if(badgeExists) throw new HttpException('badge already exists', 400);
    
    if(!file) throw new HttpException('error', 400)
    
    await this.sendImageToR2(file, createBadgeDto.name);

    createBadgeDto.img = `https://pub-437076f47a2e4ad085b3165621e197ed.r2.dev/${createBadgeDto.name}`;

    return this.prisma.badge.create({ data: createBadgeDto });
  }

  findAll() {
    return this.prisma.badge.findMany();
  }

  findOne(id: number) {
    return this.prisma.badge.findUnique({ where: { id } });
  }

  update(id: number, updateBadgeDto: UpdateBadgeDto) {
    return this.prisma.badge.update({
      where: { id },
      data: updateBadgeDto,
    });
  }

  remove(id: number) {
    return this.prisma.badge.delete({ where: { id } });
  }

  private async sendImageToR2(file, imgKey: string) {
    const { originalname, mimetype, buffer } = await file;

    const accountid = '6934ea181c4adb3fe3836a6f90421582';
    const access_key_id = 'fed9d012d02198729743020c94497fc8';
    const access_key_secret = '9e8ea1575229b103e2d7faff53524b881a49e495a41939b035ce7fb53ab23b90';

    
    const s3  = new AWS.S3({
      endpoint: `https://${accountid}.r2.cloudflarestorage.com`,
      accessKeyId: `${access_key_id}`,
      secretAccessKey: `${access_key_secret}`,
      signatureVersion: 'v4',
    });

    return s3.putObject({ Bucket: 'badges', Key: imgKey, Body: buffer, ContentType: mimetype }).promise();
  }
}
