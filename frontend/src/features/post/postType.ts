export type postInitialStateType = {
    postData: postType;
};
export type postType = {
    uid: string;
    createdAt: string;
    writer: string;
    title: string;
    content: string;
    tag: tag[];
};
export type searchUrlBlogType = {
    searchUrl: string;
};

export type tag = {
    count: number;
    name: string;
};
