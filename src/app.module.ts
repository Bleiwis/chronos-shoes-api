import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockController } from './stock/stock.controller';
import { OrderController } from './order/order.controller';

@Module({
  imports: [],
  controllers: [AppController, StockController, OrderController],
  providers: [AppService],
})
export class AppModule {}
