import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableReservationModule } from './Tables/tables.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { TableorderModule } from './tableorder/tableorder.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TableReservationModule,
    UsersModule,
    ItemsModule,
    TableorderModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
