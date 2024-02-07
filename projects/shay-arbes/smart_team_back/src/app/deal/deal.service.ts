import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deals } from './entities/deal.entity';
import { CreateDealInput } from './dto/create-deal.input';
import { Pictures } from './entities/pictures.entity';
import { Dimensions, Unit } from './entities/dimensions.entity';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deals) private dealsRepository: Repository<Deals>,
    @InjectRepository(Pictures)
    private picturesRepository: Repository<Pictures>,
    @InjectRepository(Dimensions)
    private dimensionsRepository: Repository<Dimensions>,
  ) {}

  async getAllDeals(): Promise<Deals[]> {
    try {
      const data = await this.dealsRepository.query(
        'SELECT * FROM deals d JOIN dimensions dim ON d.deal_id = dim.deal_id JOIN pictures p ON dim.deal_id = p.deal_id',
      );
      console.log(data);
      return data;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getDealById(deal_id: string): Promise<Deals> {
    return this.dealsRepository.findOne({
      where: { deal_id },
      relations: ['dimensions', 'pictures'],
    });
  }

  async createDeal(input: CreateDealInput): Promise<Deals> {
    try {
      // Check if required fields exist
      if (
        !input ||
        !input.img_url ||
        !input.depth ||
        !input.height ||
        !input.length ||
        !input.width
      ) {
        throw new Error('Invalid input data. Missing required fields.');
      }

      const deal = this.dealsRepository.create(input);

      const returnDeal = await this.dealsRepository.save(deal);

      const picture = new Pictures();
      picture.deal_id = returnDeal.deal_id;

      // Check if img_url exists
      if (!input.img_url) {
        throw new Error('Image URL is required.');
      }
      picture.img_url = input.img_url;

      const dimensions = new Dimensions();

      dimensions.deal_id = returnDeal.deal_id;

      // Check if dimensions exist
      if (!input.depth || !input.height || !input.length || !input.width) {
        throw new Error('Dimensions are required.');
      }
      dimensions.depth = {
        intValue: input.depth,
        unit: Unit.METER,
      };
      dimensions.height = {
        intValue: input.height,
        unit: Unit.METER,
      };
      dimensions.length = {
        intValue: input.length,
        unit: Unit.METER,
      };
      dimensions.width = {
        intValue: input.width,
        unit: Unit.METER,
      };

      // Check if exteriorMaterial and interiorMaterial exist
      if (!input.exteriorMaterial || !input.interiorMaterial) {
        throw new Error('Exterior and interior materials are required.');
      }
      dimensions.exteriorMaterial = input.exteriorMaterial;
      dimensions.interiorMaterial = input.interiorMaterial;
      const dim = this.dimensionsRepository.create(dimensions);
      console.log(await this.dimensionsRepository.save(dim));
      console.log(await this.picturesRepository.save(picture));

      return returnDeal;
    } catch (error) {
      // Handle the error here
      console.error('Error creating deal:', error);
      throw new Error('Deal creation failed');
    }
  }

  async updateDeal(id: string, input: CreateDealInput): Promise<Deals> {
    const deal = await this.getDealById(id);
    Object.assign(deal, input);
    return this.dealsRepository.save(deal);
  }

  async deleteDeal(id: string): Promise<Deals> {
    const deal = await this.getDealById(id);
    return this.dealsRepository.remove(deal);
  }
}
