import crypto from 'crypto';
import jwt, { Secret } from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { Payload } from '../interface';
export const cryptoPassword = async (password: string) => {
    return await crypto
        .createHmac('sha512', (process.env.CRYPTO || 'srcret') as string)
        .update(password)
        .digest('hex');
};

export const generateToken = async (payload: Payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET as Secret,
            {
                expiresIn: '7d',
            },
            (error, token) => {
                if (error) reject(error);
                resolve(token);
            }
        );
    });
};

export const decodedToken = async (token: string) => {
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
    } catch (e) {
        console.log(e);
    }
    return decoded;
};
export const authMiddleware = async (ctx: Context, next: Next) => {
    const token: string = ctx.get('Authorization');
    if (!token) {
        ctx.status = 404;
        ctx.json({ message: 'token required' });
    }
    try {
        const decoded = await decodedToken(token);
        ctx.request.body.decoded = decoded;
        await next();
    } catch (e) {
        ctx.status = 401;
        ctx.json({ message: e.message });
    }
};
