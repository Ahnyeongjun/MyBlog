import { writer } from 'repl';
import { PostRepository } from '../../db/repository';
import { CreatePostRequest, CreateUserRequest, PostDataRequest, UpdatePostRequest } from '../../interface';

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
    const post = await this.postRepository.createPost(writer, await this.createAt(), request.content, request.title);
    
    if(post){  
      const set = new Set(request.tag);
      await this.postRepository.createTag(set,post);
    }
  }

  public async updatePost(request:UpdatePostRequest){
    const post = await this.postRepository.updatePost(request);
    if(post){  
      const set = new Set(request.tag);
      await this.postRepository.updateTag(set);
    }
  }

  public async getAllPost(page:number,pageSize:number){
   const post =  await this.postRepository.getAllPost(page,pageSize);
   
   return post;
  }
}
