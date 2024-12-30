import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TableOrder, TableOrderSchema } from './Tables/schemas/tableorder';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Aaditya123:Aaditya123@cluster0.xv6gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([
      { name: TableOrder.name, schema: TableOrderSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
