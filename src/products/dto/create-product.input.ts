import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  stock: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;
}
