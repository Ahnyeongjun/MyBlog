import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Index,
    OneToMany,
    JoinTable,
    ManyToMany,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { servicesVersion } from 'typescript';
import { Tag } from '.';
import { Series } from './series';
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

    @ManyToOne((type) => Series, (series) => series.post)
    series?: Series;
}
