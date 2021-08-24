import { PostServie } from './post.service';
import { PostRepository } from '../../db/repository';
import { Context, Next } from 'koa';

import { CreatePostRequest, DuplicatedTagRequest, PagenationPostRequest, Payload, UpdatePostRequest } from '../../interface';
import { decodedToken } from '../../lib';
import { Tag } from '../../db/entity';

export class PostController {
  private postRepository: PostRepository = new PostRepository();
  private postService: PostServie = new PostServie(this.postRepository);

  public createPost = async (ctx: Context) => {
    try {
      const token: string = ctx.get('Authorization');
      const postData: CreatePostRequest = ctx.request.body;
      const decoded =  await decodedToken(token) as unknown as Payload;
      if(decoded){
        await this.postService.createPost(postData, decoded.name);        
        ctx.status = 201;
      }
      else  ctx.status = 400;
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
 
  public updatePost = async (ctx: Context) => {
    try {
      const token: string = ctx.get('Authorization');
      const userData: UpdatePostRequest = ctx.request.body;
      const decoded = await decodedToken(token);
      if(decoded){
        await this.postService.updatePost(userData);        
        ctx.status = 201;
      }
      else  ctx.status = 400;
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
  public getAllpost = async (ctx: Context) => {
    try {
      let {page,pageSize} = ctx.query;
      const numPage = Number(page)||1
      const numPageSize = Number(pageSize)||6
       ctx.body = await this.postService.getAllPost(numPage,numPageSize);        
       ctx.status = 201;
      
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };

  public ifCreateDuplicatedByTag = async (ctx: Context, next: Next) => {
    try {
      const tagData:DuplicatedTagRequest = ctx.request.body; 
      const set = Array.from(new Set(tagData.tag))
      
      for(const tag  of set) {
        const originTag = await this.postService.getOneByTag(tag);
        await this.postService.ifCreateChoiceDuplicatedByTag(tag,originTag);
      };
      await next();
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
  public ifUpdateCountTag = async (ctx: Context, next: Next) => {
    try {
      const data :UpdatePostRequest = ctx.request.body; 
      const set = Array.from(new Set(data.tag))
      
      if(set){
        const post = await this.postRepository.getOnePost(data.uid)
        const promise = await post?.tag.map(e=>e.name);
        if(promise){
          const tagName = await Promise.all(promise);
          console.log(tagName);
          console.log(set);
          if(post?.tag != null){
   
            const deadTag = tagName.filter(x=> !set.includes(x))
            
          console.log(deadTag)
          if(deadTag&&deadTag.length !== 0)  {
            console.log("실행");
             for(const e of deadTag){
                 await this.postService.minusCountTag(e);
          }}
          }
          const setPromise = await set.map(e=>e)
          const setFinal = await Promise.all(setPromise)
          const addTag = setFinal.filter(x=>!tagName?.includes(x))
  
          for(const tag of addTag){
            await this.postService.createTag(tag)
          }
        }
    
      }
      
      await next();
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
 
}
