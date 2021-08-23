import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, ManyToOne } from 'typeorm';
import { Post } from '.';
@Entity()
export class Tag extends BaseEntity {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  uid!: string;

  @Column()
  tagName!: string;

  @ManyToOne((type) => Post, (post) => post.uid, { nullable: false, onDelete: 'CASCADE' })
  post!: Post;
}
