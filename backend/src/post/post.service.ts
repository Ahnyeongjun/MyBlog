import { PostRepository } from '../../db/repository';
import { CreatePostRequest, CreateUserRequest } from '../../interface';

export class PostServie {
  constructor(private readonly postRepository: PostRepository) {}

  public async createAt() {
    const today = new Date();

    const year: number = await today.getFullYear(); // 년도
    const month: number = (await today.getMonth()) + 1; // 월
    const date: number = await today.getDate(); // 날짜

    const day: string = year + '/' + month + '/' + date;
    return day;
  }

  public async createPost(request: CreatePostRequest, writer: string) {
    await this.postRepository.createPost(writer, await this.createAt(), request.content, request.title, request.tag);
  }
}
