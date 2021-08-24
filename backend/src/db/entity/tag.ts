import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post } from '.';
@Entity()
export class Tag extends BaseEntity {
  @PrimaryColumn()
  name!: string;

  // @ManyToOne((type) => Post, (post) => post.uid, { nullable: false, onDelete: 'CASCADE' })
  // post!: Post;
}
