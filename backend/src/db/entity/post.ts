import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
  JoinTable,
  ManyToMany
} from 'typeorm';
import { Tag } from '.';
@Entity()
export class Post {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  uid!: string;

  @Column()
  writer!: string;

  @Column()
  createdAt!: string;

  @Column()
  content!: string;

  @Column()
  title!: string;
  
  @Column()
  searchUrl!:string;

  @ManyToMany(type=>Tag)
  @JoinTable()
  tag!: Tag[];
}
