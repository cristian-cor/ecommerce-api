import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ShoppingCard {
  @Field(() => String)
  user: string;

  @Field(() => String)
  product: string;

  @Field(() => String)
  quantity: string;
}
