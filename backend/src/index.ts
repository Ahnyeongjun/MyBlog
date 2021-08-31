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

const app = new Koa();
const router = new Router();

router.use('', api.routes());
const options = {
    origin: '*',
};
app.use(helmet()).use(cors(options)).use(bodyparser()).use(logger()).use(router.routes()).use(router.allowedMethods());

const serverCallback = app.callback();
const httpServer = http.createServer(serverCallback);
// 현대모터스

db.then(
    () => httpServer.listen(process.env.SERVER_PORT || 5000, () => {})
    // eslint-disable-next-line no-console
).catch(console.error);
