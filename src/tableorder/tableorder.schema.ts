import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TableOrder {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  })
  userId: string;
  @Prop({
    type: Number,
    required: true,
  })
  tableNumber: number;
  @Prop({
    type: [
      {
        itemName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    required: true,
  })
  items: Array<{
    itemName: string;
    price: number;
    quantity: number;
  }>;

  @Prop({ required: true })
  totalAmount: number;
}

export const TableOrderSchema = SchemaFactory.createForClass(TableOrder);
