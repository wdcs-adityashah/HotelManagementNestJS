import { Controller, Post, Get, Body } from '@nestjs/common';
import { TableorderService } from './tableorder.service';
import { TableOrder } from './tableorder.schema';
import { CreateTableOrder } from './dto/create-tableorder.dto';
@Controller('tableorder')
export class TableorderController {
  constructor(private readonly tableorderService: TableorderService) {}
  @Get()
  async getTableOrder(): Promise<TableOrder[]> {
    return this.tableorderService.getTableOrder();
  }
  @Post('createorder')
  async postTableOrder(
    @Body() createtableOrder: CreateTableOrder,
  ): Promise<TableOrder> {
    return this.tableorderService.postTableOrder(createtableOrder);
  }
}
