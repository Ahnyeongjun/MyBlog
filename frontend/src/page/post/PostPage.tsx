import React, { useMemo, useState } from 'react';
import HeaderContainer from '../../container/header/HeaderContainer';

import * as S from './styles';
import MainPostContainer from '../../container/mainPost/MainPostContainer';
import NavContainer from '../../container/nav/NavContainer';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import FooterContainer from '../../container/footer/FooterContainer';
import PostNameIntro from '../../components/PostNameIntro/PostNameIntro';

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
        document.title = `Post | YoungJun`;
    }, []);
    const { themeData } = useTypedSelector(themeDataState);
    return (
        <>
            {themeData == 'white' ? (
                <S.PostPage>
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <PostNameIntro />
                    <S.Article>
                        <MainPostContainer scrollPosition={scrollPosition} />
                        <NavContainer />
                    </S.Article>
                    <FooterContainer />
                </S.PostPage>
            ) : (
                <S.PostPage className="check">
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <PostNameIntro />
                    <S.Article className="check">
                        <MainPostContainer scrollPosition={scrollPosition} />
                        <NavContainer />
                    </S.Article>
                    <FooterContainer />
                </S.PostPage>
            )}
        </>
    );
};
export default PostPage;
