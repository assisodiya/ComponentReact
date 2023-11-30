import { Test, TestingModule } from '@nestjs/testing';
import { CrudOperationController } from './crud-operation.controller';
import { CrudOperationService } from './crud-operation.service';

describe('CrudOperationController', () => {
  let controller: CrudOperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudOperationController],
      providers: [CrudOperationService],
    }).compile();

    controller = module.get<CrudOperationController>(CrudOperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
