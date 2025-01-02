import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TableReservation {
  @Prop({
    required: true,
    unique: true,
    type: Number,
  })
  tableNumber: number;

  @Prop({
    type: Boolean,
    default: false,
  })
  isReserved: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isProcessed: boolean;
  @Prop({
    required: true,
    type: String,
  })
  userId: string;
}

export const TableReservationSchema =
  SchemaFactory.createForClass(TableReservation);
