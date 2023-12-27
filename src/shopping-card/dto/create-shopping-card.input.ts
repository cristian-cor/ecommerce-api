import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateShoppingCardInput {
  @Field(() => String)
  user: string;

  @Field(() => String)
  product: string;

  @Field(() => String)
  quantity: string;
}
