import { BaseEntity, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Post } from '.';
@Entity()
export class Series extends BaseEntity {
    @PrimaryColumn()
    name!: string;
    @OneToMany((type) => Post, (post) => post.series)
    post!: Post[];
}
