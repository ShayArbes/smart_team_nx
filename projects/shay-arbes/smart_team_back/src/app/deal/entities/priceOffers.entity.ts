import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Deals } from './deal.entity';

@Entity()
export class PriceOffers {
  @PrimaryGeneratedColumn('uuid')
  offer_id: string;

  @ManyToOne(() => Deals, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'deal_id' })
  deal: Deals;

  @Column()
  seller_id: string;

  @Column()
  price: number;
}
