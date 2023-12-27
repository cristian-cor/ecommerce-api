import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Product {
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
