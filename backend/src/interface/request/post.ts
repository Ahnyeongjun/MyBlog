import { Tag } from '../../db/entity';
import { TagRequest, updateTagRequest } from './tag';

export interface CreatePostRequest {
  content: string;
  title: string;
  tag: string[];
}
export interface DuplicatedTagRequest{
  tag: string[];
}
export interface UpdatePostRequest{
  uid:string;
  content?: string;
  title?: string;
  tag?: string[];
}
export interface PostRequest{
  uid:string;
  content?: string;
  title?: string;
  tag?: Tag[];
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