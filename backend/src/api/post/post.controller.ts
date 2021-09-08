import { PostServie } from './post.service';
import { PostRepository, SeriesRepository, TagRepository, ViewsRepository } from '../../db/repository';
import { Context, Next } from 'koa';
import { CreatePostRequest, DuplicatedTagRequest, PostRequest, UpdatePostRequest } from '../../interface';
import { Series, Tag } from '../../db/entity';

export class PostController {
    private postRepository: PostRepository = new PostRepository();
    private seriesRepository: SeriesRepository = new SeriesRepository();
    private tagRepositroy: TagRepository = new TagRepository();
    private viewsRepository: ViewsRepository = new ViewsRepository();
    private postService: PostServie = new PostServie(this.postRepository, this.seriesRepository, this.tagRepositroy, this.viewsRepository);

    //컨트롤러
    public testFindOneByTagName = async (ctx: Context) => {
        const { tagName } = ctx.request.body;
        ctx.status = 200;
        ctx.body = await await this.tagRepositroy.findAllByTagName(tagName);
    };
    public createByPost = async (ctx: Context) => {
        try {
            const decoded = ctx.request.body.decoded;
            if (decoded) {
                const postData: CreatePostRequest = ctx.request.body;
                const series: Series = ctx.request.body.series;
                await this.postService.createByPost(postData, decoded.name, series);
                ctx.status = 201;
                ctx.body = { success: true };
            } else ctx.status = 400;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
            ctx.body = { message: 'create post error' };
        }
    };
    public updateByPost = async (ctx: Context) => {
        try {
            const userData: PostRequest = ctx.request.body;
            const decoded = ctx.request.body.decoded;

            if (decoded) {
                await this.postService.updateByPost(userData);
                ctx.status = 201;
            } else ctx.status = 400;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
            ctx.body = { message: 'update post error' };
        }
    };
    //tag 관련
    public findOneByTagName = async (ctx: Context) => {
        const { tagName } = ctx.request.body;
        console.log('Xxsssss');
        const tag = await this.postService.findOneByTagName(tagName);
        console.log(tag);
        if (tag) {
            ctx.body = { tag: tag };
            ctx.status = 200;
        } else {
            ctx.status = 400;
        }
    };

    //미들웨어
    public checkByCreateRequest = async (ctx: Context, next: Next) => {
        const postData: CreatePostRequest = ctx.request.body;
        if (postData.content && postData.mainContent && postData.mainImageURL && postData.title) await next();
        else {
            ctx.status = 406;
            ctx.body = { message: 'request create post error' };
        }
    };

    public duplicatedByTag = async (ctx: Context, next: Next) => {
        try {
            const tagData: DuplicatedTagRequest = ctx.request.body;

            if (tagData) {
                const set = Array.from(new Set(tagData.tagName));
                for (const tagName of set) {
                    const originTag = await this.postService.findOneByTagName(tagName);
                    if (originTag) {
                        await this.postService.updateByTag({ name: originTag.name, count: originTag.count + 1 });
                    } else {
                        await this.postService.createByTag(tagName);
                    }
                }
            }
            await next();
        } catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = { message: 'tag error' };
        }
    };

    public duplicatedBySeries = async (ctx: Context, next: Next) => {
        try {
            const seriesName: string = ctx.request.body.seriesName;
            if (seriesName) {
                const orginSeries = await this.postService.findoneBySeriesName(seriesName);
                if (orginSeries) {
                    ctx.request.body.series = orginSeries;
                } else {
                    ctx.request.body.series = await this.postService.createBySeries(seriesName);
                }
            }
        } catch (error) {
            ctx.status = 400;
            ctx.body = { message: 'series error' };
        }
        await next();
    };

    //아 왜 이걸 만들었지 (아까워서 안 지움 ...) tag entity에서 count가 있을 경우 사용한 미들웨어

    public updateCountByTag = async (ctx: Context, next: Next) => {
        try {
            const data: UpdatePostRequest = ctx.request.body;
            const set = Array.from(new Set(data.tagName));

            const post = await this.postService.findOneByPostId(data.uid);

            if (set && post && post.tag != null) {
                const orginTagName = await Promise.all(post.tag.map((e) => e.name));

                const deadTag = orginTagName.filter((x) => !set.includes(x));

                for (const e of deadTag) {
                    await this.postService.minusCountByTag(e);
                }

                const setFinal = await Promise.all(set.map((e) => e));
                const addTag = setFinal.filter((x) => !orginTagName?.includes(x));
                const duplicatedTag = setFinal.filter((x) => orginTagName?.includes(x));

                const arrayTag: Tag[] = [];

                for (const tag of addTag) {
                    const newTag = await this.postService.findOneByTagName(tag);
                    if (newTag)
                        arrayTag.push(
                            await this.postService.updateByTag({
                                name: tag,
                                count: newTag.count + 1,
                            })
                        );
                    else arrayTag.push(await this.postService.createByTag(tag));
                }
                for (const tag of duplicatedTag) {
                    const newtag = await this.postService.findOneByTagName(tag);
                    if (newtag) arrayTag.push(newtag);
                }
                ctx.request.body.tag = arrayTag;
            }

            await next();
        } catch (error) {
            console.log(error);
            ctx.status = 400;
            ctx.body = { message: 'update tag error' };
        }
    };
}
