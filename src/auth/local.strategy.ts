import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'username', passwordField: 'password', passReqToCallback: true });
  }

  async validate(req: Request, email: string, password: string): Promise<any> {
    const db = req.headers['x-company-id'];
    const user = await this.authService.validateUser(email, password, db);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
