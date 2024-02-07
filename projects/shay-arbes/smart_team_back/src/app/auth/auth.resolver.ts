import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from '../user/user.models';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.authService.signIn(email, password);
  }

  @Query(() => User)
  @UseGuards(AuthGuard)
  getProfile(@Context() context) {
    return context.req.user;
  }
}
