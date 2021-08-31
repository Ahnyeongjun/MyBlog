import Router from '@koa/router';
import { auth } from './auth/index';
import { blog } from './post/index';
import { image } from './image/index';
const api = new Router();

api.use('/auth', auth().routes());
api.use('/blog', blog().routes());
api.use('/upload', image().routes());
export default api;
