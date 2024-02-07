import {
  ManyToOne,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Deals } from './deal.entity';
@Entity()
export class Pictures {
  @PrimaryGeneratedColumn('uuid')
  picture_id: string;

  @ManyToOne(() => Deals, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'deal_id' })
  deal_id: string;

  @Column()
  img_url: string;

  @Column({ nullable: true })
  img_description: string;
}
