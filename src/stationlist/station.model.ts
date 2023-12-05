// station.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StationListDocument = StationList & Document;

@Schema()
export class StationList {
  @Prop({ required: true })
  stationName: string;

  @Prop({ required: true })
  stationCode: string;
}

export const StationlistSchema = SchemaFactory.createForClass(StationList);
