import { Test, TestingModule } from '@nestjs/testing';
import { StationlistController } from './stationlist.controller';
import { StationlistService } from './stationlist.service';

describe('StationlistController', () => {
  let controller: StationlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationlistController],
      providers: [StationlistService],
    }).compile();

    controller = module.get<StationlistController>(StationlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
