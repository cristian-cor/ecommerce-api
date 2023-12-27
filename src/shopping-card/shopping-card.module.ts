import { Module } from '@nestjs/common';
import { ShoppingCardService } from './shopping-card.service';
import { ShoppingCardResolver } from './shopping-card.resolver';

@Module({
  providers: [ShoppingCardResolver, ShoppingCardService],
})
export class ShoppingCardModule {}
