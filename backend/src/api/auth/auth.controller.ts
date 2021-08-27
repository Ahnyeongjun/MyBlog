import { AuthService } from './auth.service';
import { UserRepository } from '../../db/repository';
import { Context, Next } from 'koa';
import { CreateUserRequest, Payload } from '../../interface';
import { generateToken, decodedToken } from '../../lib';

export class AuthController {
    private userRepository: UserRepository = new UserRepository();
    private authService: AuthService = new AuthService(this.userRepository);

    public createUser = async (ctx: Context) => {
        try {
            const userData: CreateUserRequest = ctx.request.body;
            await this.authService.createUser(userData);
            ctx.status = 201;
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };

    public first_createUser = async (ctx: Context) => {
        try {
            const name = process.env.name;
            const password = process.env.passowrd;
            const id = process.env.id;

            if (name && password && id) {
                const userData: CreateUserRequest = {
                    name: name,
                    password: password,
                    id: id,
                };
                await this.authService.createUser(userData);
                ctx.status = 201;
            } else {
                ctx.status = 400;
            }
        } catch (error) {
            console.log(error);
            ctx.status = 400;
        }
    };
    public duplicatedById = async (ctx: Context, next: Next) => {
        const userData: CreateUserRequest = ctx.request.body;
        const user = await this.authService.findOneById(userData.id);

        if (user === undefined) {
            ctx.status = 200;
            await next();
        } else {
            ctx.status = 403;
        }
    };
    public login = async (ctx: Context) => {
        const userData: CreateUserRequest = ctx.request.body;
        const user = await this.authService.login(userData);
        if (user !== undefined) {
            const payload: Payload = { id: user.id, name: user.name };
            ctx.body = { Authorization: await generateToken(payload) };
            ctx.status = 200;
        } else {
            ctx.status = 403;
        }
    };
    public check = async (ctx: Context) => {
        const token: string = ctx.get('Authorization');
        const a = await decodedToken(token);

        if (a) {
            ctx.status = 200;
        } else {
            ctx.status = 400;
        }
    };
}
