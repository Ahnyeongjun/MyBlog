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