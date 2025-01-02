import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SocketappService } from './socketapp.service';

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('table-reservation-updated')
  handleTableReservationUpdated(client: Socket, data: SocketappService) {
    console.log('Table reservation updated:', data);
    this.server.emit('table-reservation-updated', data);
  }

  @SubscribeMessage('user-logout')
  handleUserLogout(client: Socket) {
    console.log('User logged out:', client.id);
    this.server.emit('user-logout');
  }
}
