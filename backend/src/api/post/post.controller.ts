import { PostServie } from './post.service';
import { PostRepository } from '../../db/repository';
import { Context, Next } from 'koa';

import {
    CreatePostRequest,
    DuplicatedTagRequest,
    PagenationPostRequest,
    Payload,
    PostRequest,
    SeriesRequest,
    UpdatePostRequest,
} from '../../interface';
import { decodedToken } from '../../lib';
import { Tag } from '../../db/entity';
import { SeriesRepository } from '../../db/repository/series';
import { Series } from '../../db/entity/series';

export class PostController {
    private postRepository: PostRepository = new PostRepository();
    private seriesRepository: SeriesRepository = new SeriesRepository();
    private postService: PostServie = new PostServie(this.postRepository, this.seriesRepository);

    public createPost = async (ctx: Context) => {
        try {
            const decoded = ctx.request.body.decoded;
            console.log(decoded);
            const postData: CreatePostRequest = ctx.request.body;
            if (decoded) {
                const post = await this.postService.createPost(postData, decoded.name);
                ctx.status = 201;
            } else ctx.status = 400;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };

    public updatePost = async (ctx: Context) => {
        try {
            const userData: PostRequest = ctx.request.body;
            const decoded = ctx.request.body.decoded;

            if (decoded) {
                await this.postService.updatePost(userData);
                ctx.status = 201;
            } else ctx.status = 400;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };
    public getAllPost = async (ctx: Context) => {
        try {
            let { page, pageSize } = ctx.query;
            const numPage = Number(page) || 1;
            const numPageSize = Number(pageSize) || 6;
            ctx.body = await this.postService.getAllPost(numPage, numPageSize);
            ctx.status = 201;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };

    public getAllTag = async (ctx: Context) => {
        try {
            ctx.body = { tag: await this.postService.getAllTag() };
            ctx.status = 201;
        } catch (e) {
            console.log(e);
            ctx.status = 400;
        }
    };

    public getOnePost = async (ctx: Context, next: Next) => {
        const searchUrl = ctx.params.id;
        console.log(searchUrl);
        const post = await this.postService.selectSearchUrlByPost(searchUrl);
        if (post) {
            ctx.request.body.post = post;
            ctx.set({
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                credentials: 'same-origin',
            });
            await next();
            // ctx.status = 200;
        } else {
            ctx.status = 400;
        }
    };

    public updateViews = async (ctx: Context) => {
        const searchUrl = ctx.params.id;
        const post = ctx.request.body.post;
        console.log(post);
        if (post) {
            const cookie = ctx.cookies.get(`isVisited-${searchUrl}`);
            if (!cookie) {
                ctx.cookies.set(`isVisited-${searchUrl}`, `${searchUrl}`, {
                    // maxAge: 1000,
                    // httpOnly: false,
                    sameSite: 'lax',
                    // sameSite: 'none',
                    secure: true,
                    // overwrite: true,
                });
                this.postService.updateViews(post.views);
            }
        }
        ctx.body = post;
        ctx.status = 200;
    };

    public ifCreateDuplicatedByTag = async (ctx: Context, next: Next) => {
        try {
            const tagData: DuplicatedTagRequest = ctx.request.body;
            const set = Array.from(new Set(tagData.tag));
            for (const tag of set) {
                const originTag = await this.postService.getOneByTag(tag);
                await this.postService.ifCreateChoiceDuplicatedByTag(tag, originTag);
            }
            await next();
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };
    public ifUpdateCountTag = async (ctx: Context, next: Next) => {
        try {
            const data: UpdatePostRequest = ctx.request.body;
            const set = Array.from(new Set(data.tag));

            if (set) {
                const post = await this.postService.getOnePost(data.uid);
                const promise = await post?.tag.map((e) => e.name);
                if (promise) {
                    const tagName = await Promise.all(promise);

                    if (post?.tag != null) {
                        const deadTag = tagName.filter((x) => !set.includes(x));

                        if (deadTag && deadTag.length !== 0) {
                            console.log('실행');
                            for (const e of deadTag) {
                                await this.postService.minusCountTag(e);
                            }
                        }
                    }
                    const setPromise = await set.map((e) => e);
                    const setFinal = await Promise.all(setPromise);
                    const addTag = setFinal.filter((x) => !tagName?.includes(x));
                    const duplicatedTag = setFinal.filter((x) => tagName?.includes(x));

                    const arrayTag: Tag[] = [];

                    for (const tag of addTag) {
                        const newTag = await this.postService.getOneByTag(tag);
                        if (newTag)
                            arrayTag.push(
                                await this.postService.updateTag({
                                    name: tag,
                                    count: newTag.count + 1,
                                })
                            );
                        else arrayTag.push(await this.postService.createTag(tag));
                    }
                    for (const tag of duplicatedTag) {
                        const newtag = await this.postService.getOneByTag(tag);
                        if (newtag) arrayTag.push(newtag);
                    }
                    ctx.request.body.tag = arrayTag;
                }
            }
            await next();
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };
    public getTagByAllPost = async (ctx: Context) => {
        const tag: string = ctx.params.id;
        console.log(tag);
        let { page, pageSize } = ctx.query;
        const numPage = Number(page) || 1;
        const numPageSize = Number(pageSize) || 6;
        const post = await this.postService.getTagByAllPost(tag, numPage, numPageSize);
        if (post) {
            ctx.body = { post: post };
            ctx.status = 200;
        } else {
            ctx.status = 400;
        }
    };
    public getOneTag = async (ctx: Context) => {
        const { tagName } = ctx.request.body;
        const tag = await this.postService.getOneTag(tagName);
        console.log(tag);
        if (tag) {
            ctx.body = { tag: tag };
            ctx.status = 200;
        } else {
            ctx.status = 400;
        }
    };
}
