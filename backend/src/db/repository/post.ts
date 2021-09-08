import { EntityRepository, getConnection, getRepository, Repository } from 'typeorm';
import connection from '..';
import { CreatePost, PostDataRequest, PostRequest, TagRequest, UpdatePostRequest, updateTagRequest } from '../../interface';

import { Post, Tag, Views } from '../entity';
import { Series } from '../entity/series';

@EntityRepository(Post)
export class PostRepository {
    public async createByPost(req: CreatePost) {
        const post = new Post();
        post.content = req.content;
        post.title = req.title;
        post.createdAt = req.createdAt;
        post.writer = req.writer;
        if (req.tag) post.tag = req.tag;
        if (req.series) post.series = req.series;
        post.mainImageURL = req.mainImageURL;
        post.mainContent = req.mainContent;
        post.searchUrl = req.searchUrl;
        post.views = req.views;
        await (await connection).manager.save(post);

        return post;
    }
    public async findOneByPostSearchUrl(searchUrl: string) {
        const postRepository = (await connection).manager.getRepository(Post);

        return await postRepository.findOne({
            relations: ['tag', 'views'],
            where: { searchUrl: searchUrl },
        });
    }
    public async findOneByPostId(uid: string) {
        const postRepository = (await connection).manager.getRepository(Post);
        return await postRepository.findOne({
            where: { uid: uid },
            relations: ['tag'],
        });
    }

    public async deleteByTag(tagName: string) {
        await getConnection().createQueryBuilder().delete().from(Tag).where('name = :name', { name: tagName }).execute();
    }

    public async updateByPost(req: PostRequest) {
        const postRepository = (await connection).manager.getRepository(Post);
        const post = await this.findOneByPostId(req.uid);
        return postRepository.save({
            ...post,
            ...req,
        });
    }
    public async findAllByPost(page: number, pageSize: number) {
        const postRepository = (await connection).manager.getRepository(Post);
        const [result, total] = await postRepository.findAndCount({
            order: {
                createdAt: 'DESC',
            },
            take: pageSize,
            skip: (page - 1) * pageSize,
            relations: ['tag'],
        });
        return {
            data: result,
            total: total,
        };
    }
    public async findPostByAllTagName(tagName: string, page: number, pageSize: number) {
        const postRepository = (await connection).manager.getRepository(Post);

        return postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.tag', 'tag')
            .where('tag.name = :name', { name: tagName })
            .take(pageSize)
            .skip((page - 1) * pageSize)
            .getMany();
    }
}
