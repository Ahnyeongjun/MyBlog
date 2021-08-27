import Router from '@koa/router';
import { auth } from './auth/index';
import { blog } from './post/index';
const api = new Router();

api.use('/auth', auth().routes());
api.use('/blog', blog().routes());
export default api;
