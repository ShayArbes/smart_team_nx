import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Deal } from './deal.model';
import { DealsService } from './deal.service';
import { CreateDealInput } from './dto/create-deal.input'; // Assuming you have a corresponding input type

@Resolver(() => Deal)
export class DealResolver {
  constructor(private readonly dealsService: DealsService) {}

  @Query(() => [Deal])
  async getAllDeals() {
    return this.dealsService.getAllDeals();
  }

  @Query(() => Deal)
  async getDealById(@Args('id') id: string) {
    return this.dealsService.getDealById(id);
  }

  @Mutation(() => Deal)
  async createDeal(@Args('input') input: CreateDealInput) {
    return this.dealsService.createDeal(input);
  }

  @Mutation(() => Deal)
  async updateDeal(
    @Args('id') id: string,
    @Args('input') input: CreateDealInput,
  ) {
    return this.dealsService.updateDeal(id, input);
  }

  @Mutation(() => Deal)
  async deleteDeal(@Args('id') id: string) {
    return this.dealsService.deleteDeal(id);
  }
}
