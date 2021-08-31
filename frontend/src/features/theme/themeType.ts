export type ThemeSliceInitialStateType = {
    themeData: string;
};

type themeString = 'black' | 'white';
export type ThemeActionType = {
    themeType: themeString;
};
