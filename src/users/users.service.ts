import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PeopleService } from 'src/people/people.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly peopleService: PeopleService,
    ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = createUserDto;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(newUser.password, salt);
  
      newUser.password = hash;
      
      const createdUser = await this.prisma.user.create({ data: createUserDto });
      await this.peopleService.create({ name: newUser.email, user_id: createdUser.id });
      return createdUser;
    } catch (error) {
        throw new HttpException(`Create User error: ${error.meta.target[0]} already exists`, 400)
    }

  }

  findAll() {
    return this.prisma.user.findMany({ where: { active: true }, include: { Person: true } });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id }, include: { Person: true } });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let updatedUser: UpdateUserDto = updateUserDto;

    if (updateUserDto.password) {
      updatedUser = this.userWithPasswordHash(updateUserDto);
    }

    return this.prisma.user.update({
      where: { id },
      data: updatedUser,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  private userWithPasswordHash(user: CreateUserDto | UpdateUserDto) {
    const newUser = user;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newUser.password, salt);

    newUser.password = hash;

    return newUser;
  }
}
