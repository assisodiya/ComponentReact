// crud-operation.model.ts
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CrudOperation, CrudOperationDocument } from './crud-operation.schema';

@Injectable()
export class CrudOperationService {
  constructor(
    @InjectModel(CrudOperation.name) private readonly crudOperationModel: Model<CrudOperationDocument>,
  ) {}

  async findAll(): Promise<CrudOperation[]> {
    return this.crudOperationModel.find().exec();
  }
}
