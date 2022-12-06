import { SetMetadata } from '@nestjs/common';
import { PERMISSION_KEY } from 'src/config/constants';
import { PermissisonEnum } from './enum/permissions.enum';

export const Permission = (...roles: PermissisonEnum[]) => SetMetadata(PERMISSION_KEY, roles);