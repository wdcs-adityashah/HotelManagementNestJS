import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items } from './items.schema';
import { CreateMenuItemDto } from './dto/create-menuitem.dto';
@Injectable()
export class ItemsService {
  constructor(@InjectModel(Items.name) private ItemModel: Model<Items>) {}
  async getMenuItems(): Promise<Items[]> {
    return this.ItemModel.find().exec();
  }

  async createMenuItem(createMenuItemDto: CreateMenuItemDto): Promise<Items> {
    const newItem = new this.ItemModel(createMenuItemDto);
    return newItem.save();
  }

  async updateMenuItem(
    id: string,
    updatedData: Partial<Items>,
  ): Promise<Items> {
    const updatedItem = await this.ItemModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true },
    );
    if (!updatedItem) {
      throw new NotFoundException('Item Not Found');
    }
    return updatedItem;
  }
  async deleteMenuItem(id: string): Promise<Items> {
    const deletedItem = await this.ItemModel.findByIdAndDelete(id);
    if (!deletedItem) {
      throw new NotFoundException('Item not Found');
    }
    return deletedItem;
  }
}
