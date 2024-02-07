import { Module } from '@nestjs/common';
import { DealsService } from './deal.service';
import { DealResolver } from './deal.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deals, LikedDeals } from './entities/deal.entity';
import { Pictures } from './entities/pictures.entity';
import { Dimensions } from './entities/dimensions.entity';
import { DealGroups } from './entities/deal_groups.entity';
import { PriceOffers } from './entities/priceOffers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Deals,
      Dimensions,
      Pictures,
      PriceOffers,
      DealGroups,
      LikedDeals,
    ]),
  ],
  providers: [DealResolver, DealsService],
})
export class DealModule {}
