import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, JoinTable, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { Tag } from '.';
import { Views } from './views';
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
    searchUrl!: string;

    @ManyToMany((type) => Tag)
    @JoinTable()
    tag!: Tag[];

    @OneToOne((type) => Views, (views) => views.uid)
    @JoinColumn()
    views!: Views;

    @Column()
    mainImageURL!: string;

    @Column()
    mainContent!: string;
}
