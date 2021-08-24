import { PostServie } from './post.service';
import { PostRepository } from '../../db/repository';
import { Context, Next } from 'koa';

import { CreatePostRequest, PagenationPostRequest, Payload, UpdatePostRequest } from '../../interface';
import { decodedToken } from '../../lib';

export class PostController {
  private postRepository: PostRepository = new PostRepository();
  private authService: PostServie = new PostServie(this.postRepository);

  public createPost = async (ctx: Context) => {
    try {
      const token: string = ctx.get('Authorization');
      const userData: CreatePostRequest = ctx.request.body;
      console.log(userData)
      const decoded =  await decodedToken(token) as unknown as Payload;
      if(decoded){
        await this.authService.createPost(userData, decoded.name);        
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
      console.log(userData)
      const decoded = await decodedToken(token);
      if(decoded){
        await this.authService.updatePost(userData);        
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
      console.log(numPageSize)
       ctx.body = await this.authService.getAllPost(numPage,numPageSize);        
       ctx.status = 201;
      
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
}
