import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TableReservation } from '../schemas/table';
import { Model } from 'mongoose';
@Injectable()
export class TableReservationService {
  constructor(
    @InjectModel(TableReservation.name)
    private tableReservationModel: Model<TableReservation>,
  ) {}

  async updateTableReservation(
    tableNumber: number,
    updateData: Partial<TableReservation>,
  ) {
    return this.tableReservationModel.findOneAndUpdate(
      { tableNumber },
      updateData,
      { new: true, upsert: true },
    );
  }

  async getTableReservations() {
    return this.tableReservationModel.find({});
  }
}
