import { Test, TestingModule } from '@nestjs/testing';
import { PersonBadgesController } from './person-badges.controller';
import { PersonBadgesService } from './person-badges.service';

describe('PersonBadgesController', () => {
  let controller: PersonBadgesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonBadgesController],
      providers: [PersonBadgesService],
    }).compile();

    controller = module.get<PersonBadgesController>(PersonBadgesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
