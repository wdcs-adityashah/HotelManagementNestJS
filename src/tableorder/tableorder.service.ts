import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TableOrder } from './tableorder.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTableOrder } from './dto/create-tableorder.dto';
@Injectable()
export class TableorderService {
  constructor(
    @InjectModel(TableOrder.name) private TableOrderModel: Model<TableOrder>,
  ) {}
  async getTableOrder(): Promise<TableOrder[]> {
    return this.TableOrderModel.find().exec();
  }

  async postTableOrder(
    createTableOrder: CreateTableOrder,
  ): Promise<TableOrder> {
    const newOrder = new this.TableOrderModel(createTableOrder);
    return newOrder.save();
  }
}
