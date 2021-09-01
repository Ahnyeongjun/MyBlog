export type editorSliceInitialStateType = {
    text: string;
    title: string;
    tag: string[];
    postData: post[];
    FeautredPostData: post[];
    total: number;
    mainImageURL: string;
    mainContent: string;
};
type post = {
    text: string;
    title: string;
    tag: string[];
    uid: string;
    searchUrl: string;
    mainImageURL: string;
    mainContent: string;
};
export type upLoadActionType = {
    text: string;
    title: string;
    tag: string[];
    mainImageURL: string;
    mainContent: string;
};
export type editorActionType = {
    text: string;
};

export type titleActionType = {
    title: string;
};

export type mainImageURLActionType = {
    mainImageURL: string;
};
export type mainContentActionType = {
    mainContent: string;
};
export type tagActioinType = {
    tag: string;
};

export type PageNationBlogType = {
    page: number;
    pageSize: number;
    type: string;
};

export type successGetBlogType = {
    type: string;
    postData: post[];
    total: number;
};
