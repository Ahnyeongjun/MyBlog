import Router from '@koa/router';

const router: Router = new Router();

import { PostController } from './post.controller';

export const blog = (): Router => {
  const postController: PostController = new PostController();

  router.post('/', postController.ifCreateDuplicatedByTag, postController.createPost);
  router.patch('/', postController.ifUpdateCountTag,  postController.updatePost);
  router.get('/post',postController.getAllpost);
  // router.get('/tag',postController.getAllTag);
  
  router.get('/featured', async (ctx: any) => {
    ctx.body = 'blog';
  });
  router.get('/post/:id', async (ctx: any) => {
    ctx.body = 'blog';
  });
  router.get('/tag/:id');

  router.get('/test', async (ctx: any) => {
    ctx.body = 'blog';
  });
  return router;
};
