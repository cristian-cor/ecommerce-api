import { Injectable } from '@nestjs/common';
import { CreateShoppingCardInput } from './dto/create-shopping-card.input';
import { UpdateShoppingCardInput } from './dto/update-shopping-card.input';

@Injectable()
export class ShoppingCardService {
  create(data: CreateShoppingCardInput) {
    return 'This action adds a new shoppingCard';
  }

  findAll() {
    return `This action returns all shoppingCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingCard`;
  }

  update(id: number, data: UpdateShoppingCardInput) {
    return `This action updates a #${id} shoppingCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingCard`;
  }
}
