export type tagInitialStateType = {
    tag: tag[];
    oneTag: tag;
};
type tag = {
    count: number;
    name: string;
};

export type successTagListType = {
    tag: tag[];
};

export type searchTagNameType = {
    tagName: string;
};

export type successOneTagType = {
    tag: tag;
};
export type getTagType = {};
