// update-deal.input.ts

import { CreateDealInput } from './create-deal.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDealInput extends PartialType(CreateDealInput) {
  @Field()
  id: string;
}
