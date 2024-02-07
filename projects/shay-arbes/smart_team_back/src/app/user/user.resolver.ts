import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.models';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {
  Logger,
  NotFoundException,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { GraphqlCacheInterceptor } from './interceptors/graphqlCache.interceptor';
import { GraphqlCacheKey } from '../decorator/decorator.decorator';
import * as bcrypt from 'bcrypt';

const logger = new Logger('UserResolver');

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  @UsePipes(new ValidationPipe())
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const hashedPassword = bcrypt.hashSync(createUserInput.password, 10);
    const newUser = await this.userService.create({
      ...createUserInput,
      password: hashedPassword,
    });

    return newUser;
  }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('users')
  @Query(() => [User], { name: 'users' })
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      logger.error(`Error fetching users: ${error.message}`, error.stack);
      throw error;
    }
  }

  @UseInterceptors(GraphqlCacheInterceptor)
  @GraphqlCacheKey('user')
  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      logger.error(`Error fetching user by ID: ${error.message}`, error.stack);
      throw error;
    }
  }

  @UseInterceptors(GraphqlCacheInterceptor)
  @GraphqlCacheKey('userByEmail')
  @Query(() => User, { name: 'userByEmail' })
  async findOneByEmail(@Args('email', { type: () => String }) email: string) {
    try {
      const user = await this.userService.findOneByEmail(email);
      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }
      return user;
    } catch (error) {
      logger.error(
        `Error fetching user by email: ${error.message}`,
        error.stack
      );
      throw error;
    }
  }

  @Mutation(() => User)
  @UsePipes(new ValidationPipe())
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    try {
      if (updateUserInput.password) {
        updateUserInput.password = await bcrypt.hash(
          updateUserInput.password,
          10
        );
      }
      const updatedUser = await this.userService.update(
        updateUserInput.id,
        updateUserInput
      );

      if (!updatedUser) {
        throw new NotFoundException(
          `User with id ${updateUserInput.id} not found.`
        );
      }

      return updatedUser;
    } catch (error) {
      logger.error(`Error updating user: ${error.message}`, error.stack);
      throw error;
    }
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.userService.remove(id);
    } catch (error) {
      logger.error(`Error removing user: ${error.message}`, error.stack);
      throw error;
    }
  }

  @Subscription(() => String)
  userCreated() {
    return pubSub.asyncIterator('USER_CREATED');
  }
}
