// stationlist.module.ts
import { Module } from '@nestjs/common';
import { StationlistService } from './stationlist.service';
import { StationlistController } from './stationlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StationlistSchema } from './station.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'StationList', schema: StationlistSchema }])],
  controllers: [StationlistController],
  providers: [StationlistService],
})
export class StationlistModule {}
