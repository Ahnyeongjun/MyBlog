import React, { useMemo, useState } from 'react';
import TagNameContainer from '../../container/tagName/TagNameContainer';
import HeaderContainer from '../../container/header/HeaderContainer';

import * as S from './styles';
import MainPostContainer from '../../container/mainPost/MainPostContainer';
import NavContainer from '../../container/nav/NavContainer';
import axios from 'axios';
import { setTheme } from '../../utils/setThemeUtils';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';

const PostPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
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

    useMemo(async () => {
        window.addEventListener('scroll', updateScroll);
    }, []);
    const { themeData } = useTypedSelector(themeDataState);
    return (
        <>
            {themeData == 'white' ? (
                <S.TagSearch>
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <TagNameContainer tagName={'Post'} />
                    <S.Article>
                        <MainPostContainer scrollPosition={scrollPosition} />
                        <NavContainer />
                    </S.Article>
                </S.TagSearch>
            ) : (
                <S.TagSearch className="check">
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <TagNameContainer tagName={'Post'} />
                    <S.Article className="check">
                        <MainPostContainer scrollPosition={scrollPosition} />
                        <NavContainer />
                    </S.Article>
                </S.TagSearch>
            )}
        </>
    );
};
export default PostPage;
