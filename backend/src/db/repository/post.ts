import { EntityRepository, getConnection, getRepository, Repository } from 'typeorm';
import connection from '..';
import { PostDataRequest, PostRequest, TagRequest, UpdatePostRequest, updateTagRequest } from '../../interface';

import { Post, Tag } from '../entity';

@EntityRepository(Post)
export class PostRepository {
  public async createPost(
    writer: string,
    createdAt: string,
    content: string,
    title: string,
    tag:Tag[]
  ) {
    try {

        const post = new Post();
      post.content = content;
      post.title = title;
      post.createdAt = createdAt;
      post.writer = writer;
      post.tag = tag;
      await (await connection).manager.save(post);

      return post;
    } catch (e) {
      console.log(e);
    }
  }
  public async deleteByTag(
    tagName:string
  ) {
    await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Tag)
    .where("name = :name", { name: tagName })
    .execute();
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
    req:PostRequest
  ){
    const postRepository = (await connection).manager.getRepository(Post);
    const post = this.getOnePost(req.uid)
    return postRepository.save({
      ...post,
      ...req
    })
  }

  public async getOnePost(
    uid:string
  ){
    const postRepository = (await connection).manager.getRepository(Post);
    const post = await postRepository.findOne({
      where:{uid:uid},
      relations:["tag"]
    })
    return post;
  }

  public async createTag(
    tagName:string,
  ){
      const tag = new Tag();
      tag.name = tagName;
      tag.count =1;
      const tagRepository = (await connection).manager.getRepository(Tag);
      tagRepository.save(tag)
  }


  // public async updateTag(
  //   req:Set<updateTagRequest>,
  // ){
  //   const tagRepository = (await connection).manager.getRepository(Tag);
  //   req.forEach(async e => {
  //     const tag = await tagRepository.findOne({
  //       where:{uid:e.uid}
  //     });
  //     tagRepository.save({
  //       ...tag,
  //       ...req,
  //     })
  //   })
  // }
  public async getAllTag(
    tagName:string
  ){
    const tagRepository = (await connection).manager.getRepository(Tag);
    return await tagRepository.findAndCount({
      where:{name:tagName}
    });
  }

  public async getOneTag(
    tagName:string
  ){
    const tagRepository = (await connection).manager.getRepository(Tag);
    return await tagRepository.findOne({
      where:{name:tagName}
    })
  }
  public async updateTag(
    updateTag:updateTagRequest,
  ){
    const tagRepository = (await connection).manager.getRepository(Tag);
    const tag = await tagRepository.findOne({
      where:{name:updateTag.tagName}
    })
    tagRepository.save({
      ...tag,
      ...updateTag
    })
  }
}

