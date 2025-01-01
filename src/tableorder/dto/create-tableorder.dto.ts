import { IsNumber, IsString, IsArray } from 'class-validator';
import { Item } from '../item.interface';
export class CreateTableOrder {
  @IsString()
  userId: string;
  @IsNumber()
  tableNumber: number;
  @IsArray()
  items: Item[];
  @IsNumber()
  totalAmount: number;
}
