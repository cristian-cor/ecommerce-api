import { CreateShoppingCardInput } from './create-shopping-card.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShoppingCardInput extends PartialType(
  CreateShoppingCardInput,
) {
  @Field(() => String)
  id: string;
}
