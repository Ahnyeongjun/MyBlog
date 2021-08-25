import { writer } from 'repl';
import { Tag } from '../../db/entity';
import { PostRepository } from '../../db/repository';
import { CreatePostRequest, CreateUserRequest, PostDataRequest, PostRequest, UpdatePostRequest, updateTagRequest } from '../../interface';

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
 
    const customTag = await this.getAllTag(request.tag)
    await this.postRepository.createPost(writer, await this.createAt(), request.content, request.title, customTag);
  }

  public async updatePost(request:PostRequest){
    if(request.tag){    
      const res:PostRequest = {
        uid: request.uid,
        content: request.content,
        title: request.title,
        tag: request.tag, 
      }
      console.log(res);
      await this.postRepository.updatePost(res);

    }    
    else{
    const res:PostRequest = {
      uid: request.uid,
      content: request.content,
      title: request.title,
      tag: [], 
    }

    await this.postRepository.updatePost(res);
  }

  }
    



  public async getAllTag(tag:string[]){
    const set = await Array.from(new Set(tag))

    const saveTag:Tag[] = await[];
    console.log(set);
    for(let e of set){

      const tag = await this.postRepository.getOneTag(e);

      if(tag)
      saveTag.push(tag);
    }
    console.log(saveTag)
    return saveTag
  }

 
  public async getAllPost(page:number,pageSize:number){
   
   return this.postRepository.getAllPost(page,pageSize);
;
  }

  public async getOneByTag(tagName:string){
    return this.postRepository.getOneTag(tagName);
  }
  
  public async createTag(tagName:string){
    return this.postRepository.createTag(tagName);
  }
  public async updateTag(tag:updateTagRequest){
    return this.postRepository.updateTag(tag);

  }

  public async ifCreateChoiceDuplicatedByTag(tagName:string,tag?:Tag, ){
    if(tag){
      await this.updateTag({name: tag.name,count:tag.count + 1})
    }
    else {
      await this.createTag(tagName).then(() => console.log("Created"))
    }
  }

  public minusCountTag = async(tagName:string) => {
    const tag = await this.getOneByTag(tagName);
    if(tag){
    if(tag.count <= 1){
      await this.deleteByTag(tag.name)
    }
    else {
      await this.updateTag({name: tag.name,count:tag.count - 1})
    }
    }
 
  }

  public async getOnePost(uid:string){
    return this.postRepository.getOnePost(uid);
  }
  public async deleteByTag(tagName:string){
    this.postRepository.deleteByTag(tagName);
  }
}
