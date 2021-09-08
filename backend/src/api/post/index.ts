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
    router.get('/post', postController.findAllByPost);
    router.get('/featured', postController.findAllByPost);
    router.get('/post/tag/:id', postController.findPostByAllTagName);
    router.get('/post/:id', postController.findOneByPostSearchUrl, postController.updateByViews);

    //tag 중심
    router.get('/tag', postController.findTagAllByTagName);
    router.post('/tag/count', postController.findTagOneByTagName);

    //series 중심
    router.get('/series', postController.findSeriesAllBySeries);
    router.get('/series/:seriesName', postController.findPostOneBySeries);

    //test api
    router.get('/test', async (ctx: any) => {
        ctx.body = 'blog';
    });

    return router;
};
