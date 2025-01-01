import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateMenuItemDto {
  @IsNotEmpty()
  @IsString()
  itemName: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
