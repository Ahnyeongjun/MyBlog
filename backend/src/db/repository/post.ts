import { EntityRepository, getRepository, Repository } from 'typeorm';
import connection from '..';
import { PostDataRequest, TagRequest, UpdatePostRequest, updateTagRequest } from '../../interface';

import { Post, Tag } from '../entity';

@EntityRepository(Post)
export class PostRepository {
  public async createPost(
    writer: string,
    createdAt: string,
    content: string,
    title: string,
  ) {
    try {
      const post = new Post();
      post.content = content;
      post.title = title;
      post.createdAt = createdAt;
      post.writer = writer;
      //await getRepository(Post).createQueryBuilder().insert().into(Post).values({ writer, createdAt, content, title }).execute();
      await (await connection).manager.save(post);

      return post;
    } catch (e) {
      console.log(e);
    }
  }
  public async getAllPost(
    page:number,
    pageSize:number,
  ){
    const postRepository = (await connection).manager.getRepository(Post);
    const [result,total] =  await postRepository.findAndCount(
      {
        take:pageSize,
        skip: (page-1)*pageSize,
        relations:["tag"]
      }
    )
    return{
      data: result,
      total:total,
    }
  }


  public async updatePost(
    req:UpdatePostRequest
  ){
    const postRepository = (await connection).manager.getRepository(Post);
    const post = await postRepository.findOne({
      where:{uid:req.uid}
    })
    console.log(post);
    return postRepository.save({
      ...post,
      ...req
    })
  }
  public async createTag(
    tag:Set<TagRequest>,
    post:Post
  ){
    tag.forEach(async e => {
      const tag = new Tag();
      tag.tagName = String(e);
      tag.post = post;
      console.log(tag);
      (await connection).manager.save(tag)
    });
  }


  public async updateTag(
    req:Set<updateTagRequest>,
  ){
    const tagRepository = (await connection).manager.getRepository(Tag);
    req.forEach(async e => {
      const tag = await tagRepository.findOne({
        where:{uid:e.uid}
      });
      tagRepository.save({
        ...tag,
        ...req,
      })
    })
  }
  public async getAllTag(
    uid:string
  ){
    const tagRepository = (await connection).manager.getRepository(Tag);
    return await tagRepository.findAndCount({
      where:{post:uid}
    });
  }
}

