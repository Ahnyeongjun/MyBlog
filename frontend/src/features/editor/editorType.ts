export type editorSliceInitialStateType = {
    text: string;
    title: string;
    tag: string[];
    mainImageURL: string;
    mainContent: string;
    seriesName: string;
};

export type upLoadActionType = {
    text: string;
    title: string;
    tag: string[];
    mainImageURL: string;
    mainContent: string;
    seriesName: string;
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
export type serriesNameActionType = {
    seriesName: string;
};
