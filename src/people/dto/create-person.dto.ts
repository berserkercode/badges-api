import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  github_user?: string;
  
  user_id: number;
}
