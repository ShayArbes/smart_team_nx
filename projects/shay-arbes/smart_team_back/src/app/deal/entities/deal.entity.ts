import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pictures } from './pictures.entity';

@Entity()
export class Deals {
  @PrimaryGeneratedColumn('uuid')
  deal_id: string;

  @Column({ nullable: false })
  productName: string;

  @Column()
  dealManagerId: string;

  @Column({ nullable: true })
  targetAmount: number;

  @Column({ nullable: true })
  daysValid: number;

  @Column({ nullable: true })
  location: string;

  @Column()
  categories: string;

  @Column('text')
  description: string;

  @Column('enum', {
    enum: ['ended', 'active', 'cancelled'],
    default: ['active'],
  })
  status: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Pictures, (picture) => picture.deal_id)
  pictures: Pictures;
}

import { Users } from '../../user/entities/user.entity';

@Entity()
export class LikedDeals {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne(() => Deals, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'deal_id' })
  deal: Deals;
}
