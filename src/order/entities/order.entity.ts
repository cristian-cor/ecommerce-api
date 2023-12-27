import { ObjectType, Field } from '@nestjs/graphql';
import { State } from '../dto/create-order.input';

@ObjectType()
export class Order {
  @Field(() => String)
  user: string;

  @Field(() => String)
  product: string;

  @Field(() => String)
  quantity: string;

  @Field(() => String)
  date_of_order: string;

  @Field(() => State)
  state: State;
}
