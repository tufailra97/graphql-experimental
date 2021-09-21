import { Field, ObjectType } from 'type-graphql';
import { User as UserModel } from '@prisma/client';

@ObjectType()
export class User implements UserModel {
  @Field()
  id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  dateCreated: Date;
  @Field()
  dateUpdated: Date;

  password: string;
}
