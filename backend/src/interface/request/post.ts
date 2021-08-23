import { TagRequest } from './tag';

export interface CreatePostRequest {
  createdAt: string;
  content: string;
  title: string;
  tag: TagRequest[];
}
