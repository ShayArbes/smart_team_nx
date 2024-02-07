/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field } from '@nestjs/graphql';
import { Deal } from '../deal/deal.model';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone: string;

  @Field()
  roles: string;

  @Field((type) => [UserMessage])
  messages: UserMessage[];

  @Field((type) => [UserLikedDeal])
  likedDeals: UserLikedDeal[];
}

@ObjectType()
class UserMessage {
  @Field()
  id: string;

  @Field()
  text: string;

  @Field((type) => User)
  user: User;
}

@ObjectType()
class UserLikedDeal {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  dealId: string;
}
