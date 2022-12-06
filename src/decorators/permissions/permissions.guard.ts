import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Permission } from 'src/decorators/permissions/permissions.decorator';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from 'src/config/constants';
import { PermissisonEnum } from './enum/permissions.enum';

@Injectable()
export class PoliceGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<PermissisonEnum[]>(PERMISSION_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    
    if (!user) return false;

    return requiredRoles.some((role) => user.permissions?.includes(role));
  }
}