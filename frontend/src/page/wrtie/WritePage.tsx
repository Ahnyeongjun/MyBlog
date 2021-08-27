import HeaderContainer from '../../components/header/HeaderContainer';
import React, { useEffect, useReducer, useState } from 'react';
import * as S from './styles';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import Editor from '../../components/Editor/editor';
import Title from '../../components/title/title';
import Tag from '../../components/tag/Tag';

const WritePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const { themeData } = useTypedSelector(themeDataState);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.body.scrollTop);
    };

    const dispatch = useAppDispatch();

    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'black' : 'white';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const theme = initTheme == 'white' ? 'white' : 'black';

    dispatch(toggleTheme({ themeType: theme }));
    console.log(themeData);

    return (
        <>
            {themeData == 'white' ? (
                <S.WriteWrapper>
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <S.TitleWrapper>
                        <Title />
                    </S.TitleWrapper>
                    <S.TagWrapper>
                        <Tag />
                    </S.TagWrapper>
                    <S.EditorWrapper>
                        <Editor />
                    </S.EditorWrapper>
                    <S.Bottom />
                </S.WriteWrapper>
            ) : (
                <S.WriteWrapper className="check">
                    <HeaderContainer check={true} scrollPosition={scrollPosition} />
                    <S.TitleWrapper>
                        <Title />
                    </S.TitleWrapper>
                    <S.TagWrapper>
                        <Tag />
                    </S.TagWrapper>

                    <S.EditorWrapper>
                        <Editor check={true} />
                    </S.EditorWrapper>
                    <S.Bottom />
                </S.WriteWrapper>
            )}
        </>
    );
};
export default WritePage;
