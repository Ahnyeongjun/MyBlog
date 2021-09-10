import React, { useMemo, useState } from 'react';
import * as S from './styles';

import HeaderContainer from '../../container/header/HeaderContainer';
import IntroContainer from '../Intro/IntroContainer';
import FeautredContainer from '../Feautred/FeautredContainer';
import MainPostContainer from '../mainPost/MainPostContainer';
import NavContainer from '../nav/NavContainer';
import ScrollControlBtn from '../scrollControlBtn/scrollControlBtn';

import { useAppDispatch, useTypedSelector } from '../../module/store';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import { setTheme } from '../../utils/setThemeUtils';
import FooterContainer from '../footer/FooterContainer';

const MainController = () => {
    //테마적용
    const dispatch = useAppDispatch();

    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'black' : 'white';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const theme = initTheme == 'white' ? 'white' : 'black';

    dispatch(toggleTheme({ themeType: theme }));
    //스크롤 위치
    const [scrollPosition, setScrollPosition] = useState(0);
    const { themeData } = useTypedSelector(themeDataState);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.body.scrollTop);
    };

    useMemo(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    return (
        <>
            {themeData == 'white' ? (
                <>
                    <S.Main>
                        <HeaderContainer scrollPosition={scrollPosition} />
                        <IntroContainer />
                        <FeautredContainer />
                        <S.Article>
                            <MainPostContainer scrollPosition={scrollPosition} />
                            <NavContainer />
                        </S.Article>
                        <FooterContainer />
                    </S.Main>
                    <ScrollControlBtn scrollPosition={scrollPosition} />
                </>
            ) : (
                <>
                    <S.Main className="check">
                        <HeaderContainer scrollPosition={scrollPosition} />
                        <IntroContainer />
                        <FeautredContainer />
                        <S.Article className="check">
                            <MainPostContainer scrollPosition={scrollPosition} />
                            <NavContainer />
                        </S.Article>
                        <FooterContainer />
                    </S.Main>
                    <ScrollControlBtn scrollPosition={scrollPosition} />
                </>
            )}
        </>
    );
};
export default MainController;
