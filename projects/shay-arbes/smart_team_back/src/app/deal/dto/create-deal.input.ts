import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, ValidateNested } from 'class-validator';

@InputType()
export class CreateDealInput {
  @Field()
  @IsString()
  productName: string;

  @Field()
  @IsString()
  description?: string;

  @Field()
  width?: number;

  @Field()
  length?: number;

  @Field()
  dealManagerId?: string;

  @Field()
  status?: string;

  @Field()
  height?: number;

  @Field()
  depth?: number;

  @Field()
  @IsOptional()
  categories?: string;

  @Field()
  interiorMaterial?: string;

  @Field()
  exteriorMaterial?: string;

  @Field()
  img_url?: string;

  @Field()
  location?: string;

  @Field()
  targetAmount?: number;

  @Field({ nullable: true })
  daysValid?: number;

  //   @Field({ nullable: true })
  //   @IsOptional()
  //   additionalImages?: Upload[];
}

// export class Upload {
//   filename: string;
//   mimetype: string;
//   encoding: string;
//   createReadStream: () => NodeJS.ReadableStream;
// }
