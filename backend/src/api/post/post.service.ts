import { writer } from 'repl';
import { Tag, Views } from '../../db/entity';
import { PostRepository } from '../../db/repository';
import { CreatePostRequest, CreateUserRequest, PostDataRequest, PostRequest, UpdatePostRequest, updateTagRequest } from '../../interface';
import { v1, V1Options, v4, V4Options } from 'uuid';
import { throws } from 'assert';
import { ViewsRepository } from '../../db/repository/views';
import { ViewsService } from '../views/views.service';
import { updateViews } from '../../interface/request/views';
export class PostServie {
    constructor(private readonly postRepository: PostRepository) {}
    private viewsRepository: ViewsRepository = new ViewsRepository();
    private viewsService: ViewsService = new ViewsService(this.viewsRepository);

    public async createAt() {
        const today = new Date();

        const year: number = await today.getFullYear(); // 년도
        const month: number = (await today.getMonth()) + 1; // 월
        const date: number = await today.getDate(); // 날짜

        const day: string = year + '/' + month + '/' + date;
        return day;
    }

    public async createPost(request: CreatePostRequest, writer: string) {
        const customTag = await this.selectNameByMultiTag(request.tag);
        const searchName = await this.selectTitleByOneTag(request.title);
        const views = await this.viewsService.createViews();
        let searchUrl = '';
        if (searchName) searchUrl = request.title + '-' + v4().substring(0, 8);
        else searchUrl = request.title;
        if (views)
            await this.postRepository.createPost(
                writer,
                await this.createAt(),
                request.content,
                request.title,
                request.mainImageURL,
                request.mainContent,
                searchUrl,
                customTag,
                views
            );
    }

    public async getAllTag() {
        return await this.postRepository.selectAllByTag();
    }

    public async selectTitleByOneTag(title: string) {
        return await this.postRepository.selectTitleByOneTag(title);
    }

    public async updatePost(request: PostRequest) {
        let searchUrl = undefined;
        if (request.title) {
            const searchName = await this.selectTitleByOneTag(request.title);
            if (searchName) searchUrl = request.title + '-' + v4().substring(0, 8);
            else searchUrl = request.title;
        }
        const res: PostRequest = {
            uid: request.uid,
            content: request.content,
            title: request.title,
            tag: request.tag,
            searchUrl: searchUrl,
            mainImageURL: request.mainImageURL,
            mainContent: request.mainContent,
        };
        console.log(res);
        await this.postRepository.updatePost(res);
    }

    public async selectNameByMultiTag(tag: string[]) {
        const set = await Array.from(new Set(tag));

        const saveTag: Tag[] = await [];
        console.log(set);
        for (let e of set) {
            const tag = await this.postRepository.selectNameAllByTag(e);

            if (tag) saveTag.push(tag);
        }
        console.log(saveTag);
        return saveTag;
    }

    public async getAllPost(page: number, pageSize: number) {
        return this.postRepository.getAllPost(page, pageSize);
    }

    public async getOneByTag(tagName: string) {
        return this.postRepository.selectNameAllByTag(tagName);
    }

    public async createTag(tagName: string) {
        return this.postRepository.createTag(tagName);
    }
    public async updateTag(tag: updateTagRequest) {
        return this.postRepository.updateTag(tag);
    }

    public async ifCreateChoiceDuplicatedByTag(tagName: string, tag?: Tag) {
        if (tag) {
            await this.updateTag({ name: tag.name, count: tag.count + 1 });
        } else {
            await this.createTag(tagName).then(() => console.log('Created'));
        }
    }

    public minusCountTag = async (tagName: string) => {
        const tag = await this.getOneByTag(tagName);
        if (tag) {
            if (tag.count <= 1) {
                await this.deleteByTag(tag.name);
            } else {
                await this.updateTag({ name: tag.name, count: tag.count - 1 });
            }
        }
    };

    public async getOnePost(uid: string) {
        return this.postRepository.getOnePost(uid);
    }
    public async deleteByTag(tagName: string) {
        this.postRepository.deleteByTag(tagName);
    }
    public async getTagByAllPost(tagName: string) {
        return await this.postRepository.selectTagByAllPost(tagName);
    }
    public async selectSearchUrlByPost(searchUrl: string) {
        return await this.postRepository.selectSearchUrlByPost(searchUrl);
    }
    public async updateViews(views: Views) {
        const req: updateViews = { uid: views.uid, viewsCount: views.viewsCount + 1 };
        return await this.viewsRepository.updataView(req);
    }
}
