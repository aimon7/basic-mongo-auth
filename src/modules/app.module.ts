import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.CONTAINER === 'yes' ? 'mongodb' :'localhost'}:27017/nest?authSource=admin&w=1`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
