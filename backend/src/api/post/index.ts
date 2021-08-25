import Router from '@koa/router';

const router: Router = new Router();

import { PostController } from './post.controller';

export const blog = (): Router => {
  const postController: PostController = new PostController();

  router.post('/', postController.ifCreateDuplicatedByTag, postController.createPost);
  router.patch('/', postController.ifUpdateCountTag,  postController.updatePost);
  router.get('/post',postController.getAllPost);
  router.get('/tag',postController.getAllTag);
  router.get('/featured', postController.getAllPost);

  router.get('/post/:id', postController.getOnePost);
  router.get('/tag/:id',postController.getTagByAllPost);

  router.get('/test', async (ctx: any) => {
    ctx.body = 'blog';
  });
  return router;
};
