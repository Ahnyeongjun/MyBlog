import Router from '@koa/router';

const router: Router = new Router();

import { PostController } from './post.controller';

export const blog = (): Router => {
  const postController: PostController = new PostController();

  router.post('/', postController.createPost);
  router.patch('/', postController.updatePost);
  router.get('/post',postController.getAllpost);
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
