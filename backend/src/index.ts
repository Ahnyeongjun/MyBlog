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
//import serve from 'koa-static';
//import send from 'koa-send';

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
const koaOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
};
app.use(bodyparser())
    .use(cors(koaOptions))

    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx, next) => {
        try {
            await next();
        } catch (err: any) {
            err.status = err.statusCode || err.status || 500;
            ctx.body = err.message;
            ctx.app.emit('error', err, ctx);
        }
    });

const serverCallback = app.callback();
const httpServer = http.createServer(serverCallback);
db.then(() => httpServer.listen(process.env.SERVER_PORT || 5000, () => {})).catch(console.error);
