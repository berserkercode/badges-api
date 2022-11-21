import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string, db: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    const validPass = await bcrypt.compare(pass, user.password);

    if (user && user.active && validPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login2(user: any) {
    const payload = { db: 'lanchonete-do-douglas' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
