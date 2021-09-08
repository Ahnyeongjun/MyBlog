import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post } from '.';
@Entity()
export class Series extends BaseEntity {
    @PrimaryColumn()
    name!: string;
    @ManyToOne((type) => Post, (post) => post.series)
    post!: Post[];
}
