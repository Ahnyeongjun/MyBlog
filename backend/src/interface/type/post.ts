import { Tag, Views } from '../../db/entity';
import { Series } from '../../db/entity/series';
import { TagRequest, updateTagRequest } from './tag';

export interface CreatePostRequest {
    content: string;
    title: string;
    tagName?: string[];
    mainImageURL: string;
    mainContent: string;
}
export interface CreatePost {
    writer: string;
    createdAt: string;
    content: string;
    title: string;
    mainImageURL?: string;
    mainContent: string;
    searchUrl: string;
    views: Views;
    tag?: Tag[];
    series?: Series;
}
export interface DuplicatedTagRequest {
    tagName: string[];
}
export interface UpdatePostRequest {
    uid: string;
    content?: string;
    title?: string;
    tagName?: string[];
}
export interface PostRequest {
    uid: string;
    content?: string;
    title?: string;
    tag?: Tag[];
    series?: Series;
    searchUrl?: string;
    mainImageURL: string;
    mainContent: string;
}
export interface PagenationPostRequest {
    page: number;
    pageSize: number;
}

export interface PostDataRequest {
    data: Post[];
    total: number;
}
export interface SeriesRequest {
    series?: Series;
}
interface Post {
    title: string;
    content: string;
    createdAt: string;
    uid: string;
    writer: string;
    tag?: Tag[];
}

interface Tag2 {
    uid?: string;
    tagNmae?: string;
}
