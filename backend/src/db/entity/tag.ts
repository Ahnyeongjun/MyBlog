import { BaseEntity, Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Post } from '.';
@Entity()
export class Tag extends BaseEntity {
    @PrimaryColumn()
    name!: string;
    @Column()
    count!: number;
    // @ManyToOne((type) => Post, (post) => post.uid, { nullable: false, onDelete: 'CASCADE' })
    // post!: Post;
    @ManyToMany((type) => Post)
    @JoinTable()
    post!: Post[];
}
