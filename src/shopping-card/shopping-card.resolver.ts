import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShoppingCardService } from './shopping-card.service';
import { ShoppingCard } from './entities/shopping-card.entity';
import { CreateShoppingCardInput } from './dto/create-shopping-card.input';
import { UpdateShoppingCardInput } from './dto/update-shopping-card.input';

@Resolver(() => ShoppingCard)
export class ShoppingCardResolver {
  constructor(private readonly shoppingCardService: ShoppingCardService) {}

  @Mutation(() => ShoppingCard)
  createShoppingCard(
    @Args('createShoppingCardInput')
    createShoppingCardInput: CreateShoppingCardInput,
  ) {
    return this.shoppingCardService.create(createShoppingCardInput);
  }

  @Query(() => [ShoppingCard], { name: 'shoppingCard' })
  findAll() {
    return this.shoppingCardService.findAll();
  }

  @Query(() => ShoppingCard, { name: 'shoppingCard' })
  findOne(@Args('id') id: number) {
    return this.shoppingCardService.findOne(id);
  }
}
