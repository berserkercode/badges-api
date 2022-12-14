import { Test, TestingModule } from '@nestjs/testing';
import { CommingSoonEmailsController } from './comming-soon-emails.controller';
import { CommingSoonEmailsService } from './comming-soon-emails.service';

describe('CommingSoonEmailsController', () => {
  let controller: CommingSoonEmailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommingSoonEmailsController],
      providers: [CommingSoonEmailsService],
    }).compile();

    controller = module.get<CommingSoonEmailsController>(CommingSoonEmailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
