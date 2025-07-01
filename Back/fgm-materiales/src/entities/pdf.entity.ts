import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pdf {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;
}
