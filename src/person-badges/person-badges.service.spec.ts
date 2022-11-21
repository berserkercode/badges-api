import { Test, TestingModule } from '@nestjs/testing';
import { PersonBadgesService } from './person-badges.service';

describe('PersonBadgesService', () => {
  let service: PersonBadgesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonBadgesService],
    }).compile();

    service = module.get<PersonBadgesService>(PersonBadgesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
