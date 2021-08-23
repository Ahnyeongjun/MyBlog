import Router from '@koa/router';

const router: Router = new Router();

export const auth = (): Router => {
  router.post('/post', async (ctx: any) => {
    ctx.body = 'blog';
  });
  router.get('/featured', async (ctx: any) => {
    ctx.body = 'blog';
  });

  router.get('/post', async (ctx: any) => {
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
