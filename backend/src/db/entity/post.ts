import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany
} from 'typeorm';
import { Tag } from '.';
@Entity()
export class Post {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column()
  writer: string;

  @Column()
  createdAt: string;

  @Column()
  content: string;

  @Column()
  title: string;

  @OneToMany(type => Tag, tag => tag.post)
  tag!: Tag[];
}
