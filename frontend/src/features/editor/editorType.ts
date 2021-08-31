export type editorSliceInitialStateType = {
    text: string;
    title: string;
    tag: string[];
    postData: post[];
    total: number;
};
type post = {
    text: string;
    title: string;
    tag: string[];
};
export type upLoadActionType = {
    text: string;
    title: string;
    tag: string[];
};
export type editorActionType = {
    text: string;
};

export type titleActionType = {
    title: string;
};

export type tagActioinType = {
    tag: string;
};

export type PageNationBlogType = {
    page: number;
    pageSize: number;
};

export type successGetBlogType = {
    postData: post[];
    total: number;
};
