import { writer } from 'repl';
import { Tag } from '../../db/entity';
import { PostRepository } from '../../db/repository';
import { CreatePostRequest, CreateUserRequest, PostDataRequest, UpdatePostRequest, updateTagRequest } from '../../interface';

export class PostServie {
  constructor(private readonly postRepository: PostRepository) {}

  public async createAt() {
    const today = new Date();

    const year: number = await today.getFullYear(); // 년도
    const month: number = (await today.getMonth()) + 1; // 월
    const date: number = await today.getDate(); // 날짜

    const day: string = year + '/' + month + '/' + date;
    return day;
  }

  public async createPost(request: CreatePostRequest, writer: string) {
    const set = await Array.from(new Set(request.tag))
 
    const customTag = await this.customTag(set)

    await this.postRepository.createPost(writer, await this.createAt(), request.content, request.title, customTag);
  }

  public async customTag(set:Tag[]){
    const saveTag:Tag[] = await[];
    for(let e of set){
      const tag = await this.postRepository.getTag(String(e));
      if(tag)
      saveTag.push(tag);
    }
    return saveTag
  }

  public async updatePost(request:UpdatePostRequest){
    const post = await this.postRepository.updatePost(request);
    if(post){  
      const set = new Set(request.tag);
      // await this.postRepository.updateTag(set);
    }
  }

  public async getAllPost(page:number,pageSize:number){
   
   return this.postRepository.getAllPost(page,pageSize);
;
  }

  public async duplicatedByTag(tagName:string){
    return this.postRepository.getTag(tagName);
  }
  
  public async createTag(tagName:string){
    return this.postRepository.createTag(tagName);
  }
  public async updateTag(tag:updateTagRequest){
    return this.postRepository.updateTag(tag);

  }
}
