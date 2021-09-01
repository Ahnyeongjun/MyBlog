import { BaseEntity, Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, PrimaryColumn, Index } from 'typeorm';
import { Post } from '.';
@Entity()
export class Views extends BaseEntity {
    @Index()
    @PrimaryGeneratedColumn('uuid')
    uid!: string;

    @Column()
    viewsCount!: number;

    @OneToOne((type) => Views, (views) => views.post)
    post!: Post;
}
