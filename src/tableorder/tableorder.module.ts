import { Module } from '@nestjs/common';
import { TableorderController } from './tableorder.controller';
import { TableorderService } from './tableorder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TableOrder } from './tableorder.schema';
import { TableOrderSchema } from './tableorder.schema';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Aaditya123:Aaditya123@cluster0.xv6gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([
      { name: TableOrder.name, schema: TableOrderSchema },
    ]),
    UsersModule,
  ],
  controllers: [TableorderController],
  providers: [TableorderService],
})
export class TableorderModule {}
