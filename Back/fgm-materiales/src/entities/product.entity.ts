import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Review } from './reviews.entity';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  img_url: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'date' })
  creation: Date;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({ name: 'product_category' })
  categories: Category[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
