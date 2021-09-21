import { User } from '@prisma/client';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class SearchUser implements Partial<User> {
  @Field((type) => String, { nullable: true })
  id?: string;

  @Field((type) => String, { nullable: true })
  email?: string;
}
