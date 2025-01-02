import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.schema';
import { CreateMenuItemDto } from './dto/create-menuitem.dto';
@Controller('Items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getMenuItems(): Promise<Items[]> {
    return this.itemsService.getMenuItems();
  }

  @Post('postitems')
  async createMenuItem(
    @Body() createMenuItemDto: CreateMenuItemDto,
  ): Promise<Items> {
    return this.itemsService.createMenuItem(createMenuItemDto);
  }

  @Patch(':id')
  async updateMenuItem(
    @Param('id') id: string,
    @Body() updatedData: Partial<Items>,
  ) {
    return this.itemsService.updateMenuItem(id, updatedData);
  }
  @Delete(':id')
  async deleteMenuItem(@Param('id') id: string): Promise<Items> {
    return this.itemsService.deleteMenuItem(id);
  }
}
