import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  img: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'date' })
  creation: Date;

  @Column()
  dimension: string;

  @Column()
  material: string;

  @Column({ nullable: true })
  surface: string;

  @Column({ nullable: true })
  box: string;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({ name: 'product_category' })
  categories: Category[];
}
