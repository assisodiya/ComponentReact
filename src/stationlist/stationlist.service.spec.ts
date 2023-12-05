import { Test, TestingModule } from '@nestjs/testing';
import { StationlistService } from './stationlist.service';

describe('StationlistService', () => {
  let service: StationlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationlistService],
    }).compile();

    service = module.get<StationlistService>(StationlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
