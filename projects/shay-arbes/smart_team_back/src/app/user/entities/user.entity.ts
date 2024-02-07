import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column('enum', {
    enum: ['admin', 'customer', 'seller'],
    default: ['customer'],
  })
  roles: string;

  @Column({ nullable: true })
  messages: string;
}

// @OneToMany(() => DealPriceOffer, (priceOffer) => priceOffer.seller)
// price_offers: DealPriceOffer[];

// @OneToMany(() => UserMessage, (userMessage) => userMessage.user)
// messages: UserMessage[];

// @OneToMany(() => UserLikedDeal, (userLikedDeal) => userLikedDeal.user)
// liked_deals: UserLikedDeal[];

// @OneToMany(() => Deal, (deal) => deal.deal_manager)
// managed_deals: Deal[];
//}
