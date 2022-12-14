import { Test, TestingModule } from '@nestjs/testing';
import { CommingSoonEmailsService } from './comming-soon-emails.service';

describe('CommingSoonEmailsService', () => {
  let service: CommingSoonEmailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommingSoonEmailsService],
    }).compile();

    service = module.get<CommingSoonEmailsService>(CommingSoonEmailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
