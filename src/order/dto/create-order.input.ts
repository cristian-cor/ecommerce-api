import { InputType, Field, registerEnumType } from '@nestjs/graphql';

export enum State {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
}
registerEnumType(State, { name: 'State' });

@InputType()
export class CreateOrderInput {
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
