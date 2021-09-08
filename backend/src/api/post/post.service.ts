import { v4 } from 'uuid';
import { Series, Tag } from '../../db/entity';
import { PostRepository, SeriesRepository, TagRepository, ViewsRepository } from '../../db/repository';
import { CreatePostRequest, PostRequest, updateTagRequest } from '../../interface';

export class PostServie {
    constructor(
        private readonly postRepository: PostRepository,
        private readonly seriesRepository: SeriesRepository,
        private readonly tagRepository: TagRepository,
        private readonly viewsRepository: ViewsRepository
    ) {}
    //postRepository관련
    public async createByPost(request: CreatePostRequest, writer: string, series?: Series) {
        let customTag;
        if (request.tagName) {
            customTag = await this.changeAllByTagName(request.tagName);
        }
        const alreadySearchUrl = await this.findOneByPostSearchUrl(request.title);
        const views = await this.createByView();
        //searchUrl 이름 결정
        let searchUrl = '';
        if (alreadySearchUrl) searchUrl = request.title + '-' + v4().substring(0, 8);
        else searchUrl = request.title;
        if (views)
            await this.postRepository.createByPost({
                writer: writer,
                createdAt: await this.createdAt(),
                content: request.content,
                title: request.title,
                mainImageURL: request.mainImageURL,
                mainContent: request.mainContent,
                searchUrl: searchUrl,
                tag: customTag,
                views: views,
                series: series,
            });
    }
    public async updateByPost(request: PostRequest) {
        let searchUrl = undefined;
        if (request.title) {
            const searchName = await this.findOneByPostSearchUrl(request.title);
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
        await this.postRepository.updateByPost(res);
    }

    public async findOneByPostSearchUrl(searchUrl: string) {
        return await this.postRepository.findOneByPostSearchUrl(searchUrl);
    }
    public async findOneByPostId(uid: string) {
        return await this.postRepository.findOneByPostId(uid);
    }
    //tagRepository관련
    public async findOneByTagName(tagName: string) {
        return this.tagRepository.findOneByTagName(tagName);
    }
    public async createByTag(tagName: string) {
        return this.tagRepository.createByTag(tagName);
    }
    public async updateByTag(tag: updateTagRequest) {
        return this.tagRepository.updateByTag(tag);
    }
    public async deleteByTag(tagName: string) {
        this.postRepository.deleteByTag(tagName);
    }
    public async minusCountByTag(tagName: string) {
        const tag = await this.findOneByTagName(tagName);
        if (tag) {
            if (tag.count <= 1) {
                await this.deleteByTag(tag.name);
            } else {
                await this.updateByTag({ name: tag.name, count: tag.count - 1 });
            }
        }
    }
    //viewRepository관련
    public async createByView() {
        return await this.viewsRepository.createByView();
    }
    //seriesRepository 관련
    public async findoneBySeriesName(seriesName: string) {
        return await this.seriesRepository.findoneBySeriesName(seriesName);
    }
    public async createBySeries(seriesName: string) {
        return await this.seriesRepository.createBySeries(seriesName);
    }

    //기타
    private async createdAt() {
        const today = new Date();

        const year: number = await today.getFullYear(); // 년도
        const month: number = (await today.getMonth()) + 1; // 월
        const date: number = await today.getDate(); // 날짜

        const day: string = year + '/' + month + '/' + date;
        return day;
    }
    private async changeAllByTagName(tagName: string[]) {
        const notDuplicateTagName = Array.from(new Set(tagName));

        const saveTag: Tag[] = [];
        for (let e of notDuplicateTagName) {
            const tag = await this.findOneByTagName(e);

            if (tag) saveTag.push(tag);
        }
        console.log(saveTag);
        return saveTag;
    }
}
