import { Controller, Post, Get, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { TableReservationService } from '../services/table-reservation.service';

@Controller('table-reservations')
export class TableReservationController {
  constructor(
    private readonly tableReservationService: TableReservationService,
  ) {}

  @Post('update')
  async updateTableReservation(@Body() body: any, @Res() res: Response) {
    const { tableNumber, isReserved, userId, isProcessed } = body;

    try {
      const reservation =
        await this.tableReservationService.updateTableReservation(tableNumber, {
          isReserved,
          userId,
          isProcessed,
        });

      if (!reservation) {
        return res
          .status(404)
          .json({ message: 'Reservation not found or created.' });
      }

      return res.status(200).json(reservation);
    } catch (error) {
      console.error('Error updating table reservation:', error);
      return res
        .status(500)
        .json({ message: 'Failed to update table reservation.' });
    }
  }

  @Get()
  async getTableReservations(@Res() res: Response) {
    try {
      const reservations =
        await this.tableReservationService.getTableReservations();
      return res.json(reservations);
    } catch (error) {
      console.error('Error fetching table reservations:', error);
      return res.status(500).json({ message: error.message });
    }
  }
}
