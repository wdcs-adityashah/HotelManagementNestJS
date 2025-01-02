import { Module } from '@nestjs/common';
import { SocketappService } from './socketapp.service';
import { SocketGateway } from './socketapp.gateway';
@Module({
  providers: [SocketappService, SocketGateway],
})
export class SocketappModule {}
