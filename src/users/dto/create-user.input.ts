import { InputType, Field, registerEnumType } from '@nestjs/graphql';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
registerEnumType(Role, { name: 'Role' });

@InputType()
export class CreateUserInput {
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
