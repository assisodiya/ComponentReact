// crud-operation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCrudOperationDto } from './dto/create-crud-operation.dto';
import { CrudOperation } from './crud-operation.schema';

@Injectable()
export class CrudOperationService {
  constructor(
    @InjectModel('CrudOperation') private readonly crudOperationModel: Model<CrudOperation>,
  ) {}

  async create(createCrudOperationDto: CreateCrudOperationDto): Promise<CrudOperation> {
    const createdCrudOperation = new this.crudOperationModel(createCrudOperationDto);
    return createdCrudOperation.save();
  }

  async findAll(): Promise<CrudOperation[]> {
    return this.crudOperationModel.find().exec();
  }

  async findOne(id: string): Promise<CrudOperation | null> {
    return this.crudOperationModel.findById(id).exec();
  }

  
  async findAndUpdateByNumber(number: string, updateData: any): Promise<CrudOperation | null> {
    return this.crudOperationModel.findOneAndUpdate({ number }, updateData, { new: true }).exec();
  }




  // Implement other CRUD operations as needed

  async removeByItems(items: string): Promise<CrudOperation | null> {
    return this.crudOperationModel.findOneAndDelete({ items }).exec();
  }
}
