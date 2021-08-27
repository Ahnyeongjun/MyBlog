import Router from '@koa/router';
import { authMiddleware } from '../../lib/validate';

const router: Router = new Router();

import { PostController } from './post.controller';

export const blog = (): Router => {
    const postController: PostController = new PostController();

    //post 중심
    router.post('/', authMiddleware, postController.ifCreateDuplicatedByTag, postController.createPost);
    router.patch('/',authMiddleware, postController.ifUpdateCountTag, postController.updatePost);
    router.get('/post', postController.getAllPost);
    router.get('/featured', postController.getAllPost);
    router.get('/post/:id', postController.getOnePost);
    //tag 중심
    router.get('/tag', postController.getAllTag);
    router.get('/tag/:id', postController.getTagByAllPost);
    //test api
    router.get('/test', async (ctx: any) => {
        ctx.body = 'blog';
    });
    return router;
};
