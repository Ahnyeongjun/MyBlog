import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';

import { v1, V1Options, v4, V4Options } from 'uuid';
import { s3 } from '../../config/s3';

let s3Storage = multerS3({
    s3: s3,
    bucket: 'toinin',
    key: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        let basename = path.basename(file.originalname, extension);
        const a = cb(null, `images/${basename}-${Date.now()}${extension}`);
        console.log(a);
    },
    acl: 'public-read-write',
    contentDisposition: 'attachment',
    serverSideEncryption: 'AES256',
});
const upload = multer({ storage: s3Storage });

module.exports = {
    upload,
};
