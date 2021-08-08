import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  HttpCode,
  Param,
  Res,
} from '@nestjs/common';
import { AddShoesDTO } from './stock.dto';

@Controller('stock')
export class StockController {
  @Get()
  allStock(): string {
    return 'all shoes';
  }

  @Post()
  @HttpCode(200)
  addShoes(@Body() addShoesDTO: AddShoesDTO): string {
    return 'new shoes added';
  }

  @Put()
  updateShoes(): string {
    return 'shoes updated';
  }

  @Delete()
  deleteShoes(): string {
    return 'shoes deleted';
  }
}
