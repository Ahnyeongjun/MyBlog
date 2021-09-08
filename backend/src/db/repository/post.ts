import { EntityRepository, getConnection, getRepository, Repository } from 'typeorm';
import connection from '..';
import { PostDataRequest, PostRequest, TagRequest, UpdatePostRequest, updateTagRequest } from '../../interface';

import { Post, Tag, Views } from '../entity';
import { Series } from '../entity/series';

@EntityRepository(Post)
export class PostRepository {
    public async createPost(
        writer: string,
        createdAt: string,
        content: string,
        title: string,
        mainImageURL: string,
        mainContent: string,
        searchUrl: string,
        tag: Tag[],
        views: Views,
        series?: Series
    ) {
        try {
            const post = new Post();
            post.content = content;
            post.title = title;
            post.createdAt = createdAt;
            post.writer = writer;
            post.tag = tag;
            post.mainImageURL = mainImageURL;
            post.mainContent = mainContent;
            post.searchUrl = searchUrl;
            post.views = views;
            if (series) post.series = series;
            await (await connection).manager.save(post);

            return post;
        } catch (e) {
            console.log(e);
        }
    }
    public async selectTagByAllPost(tagName: string, page: number, pageSize: number) {
        const postRepository = (await connection).manager.getRepository(Post);

        return postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.tag', 'tag')
            .where('tag.name = :name', { name: tagName })
            .take(pageSize)
            .skip((page - 1) * pageSize)
            .getMany();
    }
    public async selectSearchUrlByPost(searchUrl: string) {
        const postRepository = (await connection).manager.getRepository(Post);

        return await postRepository.findOne({
            relations: ['tag', 'views'],
            where: { searchUrl: searchUrl },
        });
    }
    public async selectTitleByOneTag(title: string) {
        const postRepository = (await connection).manager.getRepository(Post);

        return await postRepository.findOne({
            where: { title: title },
        });
    }
    public async deleteByTag(tagName: string) {
        await getConnection().createQueryBuilder().delete().from(Tag).where('name = :name', { name: tagName }).execute();
    }

    public async getAllPost(page: number, pageSize: number) {
        const postRepository = (await connection).manager.getRepository(Post);
        const [result, total] = await postRepository.findAndCount({
            take: pageSize,
            skip: (page - 1) * pageSize,
            relations: ['tag'],
        });
        return {
            data: result,
            total: total,
        };
    }

    public async updatePost(req: PostRequest) {
        const postRepository = (await connection).manager.getRepository(Post);
        const post = await this.getOnePost(req.uid);
        return postRepository.save({
            ...post,
            ...req,
        });
    }

    public async getOnePost(uid: string) {
        const postRepository = (await connection).manager.getRepository(Post);
        return await postRepository.findOne({
            where: { uid: uid },
            relations: ['tag', 'series'],
        });
    }

    public async createTag(tagName: string) {
        const tag = new Tag();
        tag.name = tagName;
        tag.count = 1;
        const tagRepository = (await connection).manager.getRepository(Tag);
        return await tagRepository.save(tag);
    }

    // public async updateTag(
    //   req:Set<updateTagRequest>,
    // ){
    //   const tagRepository = (await connection).manager.getRepository(Tag);
    //   req.forEach(async e => {
    //     const tag = await tagRepository.findOne({
    //       where:{uid:e.uid}
    //     });
    //     tagRepository.save({
    //       ...tag,
    //       ...req,
    //     })
    //   })
    // }
    public async selectAllByTag() {
        const tagRepository = (await connection).manager.getRepository(Tag);
        return await tagRepository.find({});
    }

    public async selectNameAllByTag(tagName: string) {
        const tagRepository = (await connection).manager.getRepository(Tag);
        return await tagRepository.findOne({
            where: { name: tagName },
        });
    }
    public async updateTag(updateTag: updateTagRequest) {
        const tagRepository = (await connection).manager.getRepository(Tag);
        const tag = await tagRepository.findOne({
            where: { name: updateTag.name },
        });
        return await tagRepository.save({
            ...tag,
            ...updateTag,
        });
    }
    public async getOneTag(tagName: string) {
        try {
            const tagRepository = (await connection).manager.getRepository(Tag);

            const tag = await tagRepository.findOne({ name: tagName });

            return tag;
        } catch (e) {
            console.log(e);
        }
    }
}
