export type seriesInitialStateType = {
    series: [
        {
            name: '';
            post: [
                {
                    uid: '';
                    createdAt: '';
                    mainImageURL: '';
                }
            ];
        }
    ];
    seriesList: PostListType[];
};
export type successSeriesType = {
    series: [
        {
            name: '';
            post: [
                {
                    uid: '';
                    createdAt: '';
                    mainImageURL: '';
                }
            ];
        }
    ];
};
export type successSeriesListType = {
    seriesList: PostListType[];
};
export type seriesNameType = {
    seriesName: string;
};
type PostListType = {
    mainImageURL: string;
    mainContent: string;
    title: string;
    uid: string;
    searchUrl: string;
    createdAt: string;
};
