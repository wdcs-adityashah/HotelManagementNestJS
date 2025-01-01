import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Items, MenuItemSchema } from './items.schema';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Aaditya123:Aaditya123@cluster0.xv6gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: Items.name, schema: MenuItemSchema }]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
