import { Query, Resolver } from 'type-graphql';

import { User } from './users.types';
import { UserService } from './users.service';

@Resolver()
export class UsersResolver {
  private userService = new UserService();
  @Query(() => [User])
  users() {
    return this.userService.getAll();
  }
}
