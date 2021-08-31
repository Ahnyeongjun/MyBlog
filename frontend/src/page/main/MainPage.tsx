import HeaderContainer from '../../components/header/HeaderContainer';
import IntroContainer from '../../components/Intro/IntroContainer';
import FeautredContainer from '../../components/Feautred/FeautredContainer';
import MainPostContainer from '../../components/mainPost/MainPostContainer';
import NavContainer from '../../components/nav/NavContainer';
import ScrollControlBtn from '../../components/scrollControlBtn/scrollControlBtn';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import * as S from './styles';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import { editorState, getPost } from '../../features/editor/editorSlice';

const date = new Date();
const MainPage = () => {
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

    useMemo(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    return (
        <>
            {themeData == 'white' ? (
                <S.Main>
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <IntroContainer />
                    <FeautredContainer />
                    <S.Article>
                        <MainPostContainer />
                        <NavContainer />
                    </S.Article>
                    <S.Footer>
                        <S.FooterFont>© 2021. AhnyoungJun all rights reserved.</S.FooterFont>
                    </S.Footer>
                </S.Main>
            ) : (
                <S.Main className="check">
                    <HeaderContainer check={true} scrollPosition={scrollPosition} />
                    <IntroContainer />
                    <FeautredContainer check={true} />
                    <S.Article className="check">
                        <MainPostContainer check={true} />
                        <NavContainer check={true} />
                    </S.Article>
                    <S.Footer className="check">
                        <S.FooterFont className="check">© 2021. AhnyoungJun all rights reserved.</S.FooterFont>
                    </S.Footer>
                </S.Main>
            )}
            <ScrollControlBtn scrollPosition={scrollPosition} check={true} />
        </>
    );
};
export default MainPage;
