// crud-operation.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudOperationController } from './crud-operation.controller';
import { CrudOperationService } from './crud-operation.service';
import { CrudOperation, CrudOperationSchema } from './crud-operation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CrudOperation', schema: CrudOperationSchema }])],
  controllers: [CrudOperationController],
  providers: [CrudOperationService], 
})
export class CrudOperationModule {}
