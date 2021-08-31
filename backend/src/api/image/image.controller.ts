import { Context, Next } from 'koa';
import { s3, uploadParams } from '../../config/s3';
import { v4 } from 'uuid';
import { extname } from 'path/posix';

export class ImageController {
    public createPost = async (ctx: Context) => {
        try {
            const s3Client = s3;
            const params = uploadParams;
            const file = ctx.request.file;

            const index = file.originalname.lastIndexOf('.');
            const fileType = file.originalname.substring(index, file.originalname.length).toLocaleLowerCase();
            params.Key = v4() + fileType;
            params.Body = file.buffer;

            s3.upload(params, (err: any, data: any) => {
                if (err) {
                    ctx.status = 500;
                }
            });

            ctx.body = { image: params.Key };
            ctx.status = 200;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };
}
