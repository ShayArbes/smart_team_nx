import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Deals } from './deal.entity';

export enum Unit {
  METER = 'm',
  MM = 'mm',
  SM = 'sm',
  // Add more units as needed
}
@Entity()
export class Dimensions {
  @PrimaryGeneratedColumn('uuid')
  dimensions_id: string;

  @ManyToOne(() => Deals, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'deal_id' })
  deal_id: string;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: { intValue: 0, unit: Unit.METER }, // Provide default values
  })
  length: { intValue: number; unit: Unit };

  @Column({
    type: 'jsonb',
    nullable: true,
    default: { intValue: 0, unit: Unit.METER }, // Provide default values
  })
  width: { intValue: number; unit: Unit };

  @Column({
    type: 'jsonb',
    nullable: true,
    default: { intValue: 0, unit: Unit.METER }, // Provide default values
  })
  height: { intValue: number; unit: Unit };

  @Column({
    type: 'jsonb',
    nullable: true,
    default: { intValue: 0, unit: Unit.METER }, // Provide default values
  })
  depth: { intValue: number; unit: Unit };

  @Column({ nullable: true, default: '' })
  interiorMaterial: string;

  @Column({ nullable: true, default: '' })
  exteriorMaterial: string;
}
