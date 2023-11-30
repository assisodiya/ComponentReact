import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CrudOperationDocument = HydratedDocument<CrudOperation>;

@Schema()
export class CrudOperation {
  @Prop()
  items: string;
  @Prop()
  number:number;
}

export const CrudOperationSchema = SchemaFactory.createForClass(CrudOperation);