import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Tag extends BaseEntity {
    @PrimaryColumn()
    name!: string;
    @Column()
    count!: number;
    // @ManyToOne((type) => Post, (post) => post.uid, { nullable: false, onDelete: 'CASCADE' })
    // post!: Post;
}
