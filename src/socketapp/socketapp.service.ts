import { Injectable } from '@nestjs/common';

export interface Reservation {
  tableNumber: number;
  isReserved: boolean;
  isProcessed: boolean;
  userId?: string;
}

@Injectable()
export class SocketappService {
  private reservations: Reservation[] = [];
  getAllReservations(): Reservation[] {
    return this.reservations;
  }
  updateReservation(reservation: Reservation) {
    const index = this.reservations.findIndex(
      (res) => res.tableNumber === reservation.tableNumber,
    );
    if (index > -1) {
      this.reservations[index] = reservation;
    } else {
      this.reservations.push(reservation);
    }
  }
}
