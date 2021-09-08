import Router from '@koa/router';
import { authMiddleware } from '../../lib/validate';

const router: Router = new Router();

import { PostController } from './post.controller';

export const blog = (): Router => {
    const postController: PostController = new PostController();

    //post 중심
    router.post(
        '/',
        authMiddleware,
        postController.checkByCreateRequest,
        postController.duplicatedByTag,
        postController.duplicatedBySeries,
        postController.createByPost
    );
    router.patch('/', authMiddleware, postController.updateCountByTag, postController.updateByPost);
    // router.get('/post', postController.getAllPost);
    // router.get('/featured', postController.getAllPost);
    // router.get('/post/:id', postController.getOnePost, postController.updateViews);
    // router.get('/post/tag/:id', postController.getTagByAllPost);
    //
    // //tag 중심
    // router.get('/tag', postController.getAllTag);
    // router.post('/tag/count', postController.getOneTag);
    //views 중심(조회수) <- getOnePost에 합침
    // router.post('/views/:searchUrl', postController.updateViews);
    //test api
    router.get('/test', async (ctx: any) => {
        ctx.body = 'blog';
    });
    return router;
};
