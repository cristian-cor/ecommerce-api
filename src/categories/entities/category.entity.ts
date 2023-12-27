import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => String)
  name: string;
}
