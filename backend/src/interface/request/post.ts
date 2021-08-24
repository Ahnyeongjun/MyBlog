import { Tag } from '../../db/entity';
import { TagRequest, updateTagRequest } from './tag';

export interface CreatePostRequest {
  content: string;
  title: string;
  tag: TagRequest[];
}

export interface UpdatePostRequest{
  uid:string;
  content?: string;
  title?: string;
  tag?: updateTagRequest[];
}

export interface PagenationPostRequest{
  page:number;
  pageSize:number;
}

export interface PostDataRequest{
  data: Post[],
  total:number,
}

 interface Post{
  title:string,
  content:string,
  createdAt:string,
  uid:string,
  writer:string,
  tag?:Tag[]
}

  interface Tag2{
    uid?:string,
    tagNmae?:string,
  }