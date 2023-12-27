import { ObjectType, Field } from '@nestjs/graphql';
import { Role } from '../dto/create-user.input';

@ObjectType()
export class User {
  @Field(() => String)
  first_name: string;

  @Field(() => String)
  last_name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Role)
  role: Role;
}
