import AWS from 'aws-sdk';

export const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
type params = {
    Bucket: string;
    Key: string; // pass key
    Body?: Buffer; // pass file body
};
export const uploadParams: params = {
    Bucket: String(process.env.BUCKET),
    Key: '', // pass key
    Body: undefined, // pass file body
};
