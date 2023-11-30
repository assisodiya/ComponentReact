import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudOperationModule } from './crud-operation/crud-operation.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [  
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/TESTING'), CrudOperationModule,
     
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
