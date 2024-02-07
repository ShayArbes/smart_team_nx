import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../user/entities/user.entity';
import { Deals } from './deal.entity';

@Entity()
export class DealGroups {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Deals, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'deal_id' })
  deal_id: Deals;

  @ManyToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Users;
}
