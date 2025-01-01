import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Items {
  @Prop({
    required: true,
  })
  itemName: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  quantity: number;
}
export const MenuItemSchema = SchemaFactory.createForClass(Items);
