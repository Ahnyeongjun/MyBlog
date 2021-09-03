type PostListType = {
    mainImageURL: string;
    mainContent: string;
    title: string;
    tag: string[];
    uid: string;
    searchUrl: string;
};

export type PostListInitialStateType = {
    FeautredPostList: PostListType[];
    MainPostList: PostListType[];
    total: number;
};

type PostListSaveType = 'main' | 'feautred';

export type PageNationSearchPostListActionType = {
    page: number;
    pageSize: number;
    type: PostListSaveType;
};

export type SuccessGetPostListActionType = {
    type: string;
    postListData: PostListType[];
    total: PostListSaveType;
};
