import { PostServie } from './post.service';
import { PostRepository } from '../../db/repository';
import { Context, Next } from 'koa';

import { CreatePostRequest } from '../../interface';
import { decodedToken } from '../../lib';

export class PostController {
  private postRepository: PostRepository = new PostRepository();
  private authService: PostServie = new PostServie(this.postRepository);

  public createUser = async (ctx: Context) => {
    try {
      const token: string = ctx.get('Authorization');
      const userData: CreatePostRequest = ctx.request.body;
      const decoded = decodedToken(token);
      const{name} = decoded
      if(await decoded||name){
        await this.authService.createPost(userData, writer:name);        
      }
      ctx.status = 201;
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
}
