import { Test, TestingModule } from '@nestjs/testing';
import { CrudOperationService } from './crud-operation.service';

describe('CrudOperationService', () => {
  let service: CrudOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudOperationService],
    }).compile();

    service = module.get<CrudOperationService>(CrudOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
