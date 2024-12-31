import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TableReservationController } from './controllers/tables.controller';
import { TableReservationService } from './services/table-reservation.service';
import { TableReservation, TableReservationSchema } from './schemas/table';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Aaditya123:Aaditya123@cluster0.xv6gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([
      { name: TableReservation.name, schema: TableReservationSchema },
    ]),
  ],
  controllers: [TableReservationController],
  providers: [TableReservationService],
})
export class TableReservationModule {}
