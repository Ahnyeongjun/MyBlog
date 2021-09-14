import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import logger from 'koa-logger';
import bodyparser from 'koa-body';
import helmet from 'koa-helmet';
import http from 'http';
import './config/env.ts';
import api from './api';
import db from './db';
import fs from 'fs';
import path from 'path';
import https from 'https';
import serve from 'koa-static';
import send from 'koa-send';

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyparser())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(serve(path.resolve(__dirname, '../dist/')))
    .use(async (ctx) => {
        if ((ctx.status === 404 || ctx.status === 403) && ctx.path.indexOf('/api') !== 0)
            await send(ctx, 'index.html', { root: path.resolve(__dirname, '../dist/') });
        else {
        }
    });

const serverCallback = app.callback();
const httpServer = http.createServer(serverCallback);
db.then(() => httpServer.listen(process.env.SERVER_PORT || 5000, () => {})).catch(console.error);
