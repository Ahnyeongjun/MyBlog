import { EntityRepository, getRepository, Repository } from 'typeorm';
import { TagRequest } from '../../interface';

import { Post, Tag } from '../entity';

@EntityRepository(Post)
export class PostRepository {
  public async createPost(
    writer: string,
    createdAt: string,
    content: string,
    title: string,
    tag: TagRequest[]
  ) {
    try {
      const post = new Post();
      post.content = content;
      post.title = title;
      post.createdAt = createdAt;
      post.writer = writer;
      //await getRepository(Post).createQueryBuilder().insert().into(Post).values({ writer, createdAt, content, title }).execute();

      await tag.flatMap(e =>
        getRepository(Tag)
          .createQueryBuilder()
          .insert()
          .into(Tag)
          .values({ tagName: e.tagName, post: post })
      );
    } catch (e) {
      console.log(e);
    }
  }
}
