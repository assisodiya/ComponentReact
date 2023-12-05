import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudOperationModule } from './crud-operation/crud-operation.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StationlistModule } from './stationlist/stationlist.module';

@Module({
  imports: [  
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/TESTING'), CrudOperationModule, StationlistModule,
     
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
