import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableReservationModule } from './Tables/tables.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { TableorderModule } from './tableorder/tableorder.module';
import { ConfigModule } from '@nestjs/config';
import { SocketappModule } from './socketapp/socketapp.module';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [
    TableReservationModule,
    UsersModule,
    ItemsModule,
    TableorderModule,
    ConfigModule.forRoot(),
    SocketappModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
