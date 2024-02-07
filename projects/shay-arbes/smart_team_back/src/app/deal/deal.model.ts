import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UnitType {
  @Field(() => Int)
  intValue: number;
  @Field(() => String)
  unit: string;
}

@ObjectType()
export class Deal {
  @Field()
  productName: string;

  @Field()
  description?: string;

  @Field()
  dealManagerId?: string;

  @Field()
  status?: string;

  @Field()
  width: UnitType;

  @Field()
  length: UnitType;

  @Field()
  height: UnitType;

  @Field()
  depth: UnitType;

  @Field()
  categories?: string;

  @Field()
  interiorMaterial?: string;

  @Field()
  exteriorMaterial?: string;

  @Field()
  img_url: string;

  @Field()
  location?: string;

  @Field()
  targetAmount: number;

  @Field()
  daysValid?: number;
}
//----------------------------
