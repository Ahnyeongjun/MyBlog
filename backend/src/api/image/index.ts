import Router from '@koa/router';

import { ImageController } from './image.controller';
const router: Router = new Router();
import multer from '@koa/multer';

export const image = (): Router => {
    //post 중심
    const imageController: ImageController = new ImageController();

    let upload = multer({
        // dest: __dirname + '/uploads/',
        storage: multer.memoryStorage(),
    });
    router.post('/single', upload.single('image'), imageController.createPost);

    return router;
};
