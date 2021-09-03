import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import TagNameContainer from '../../container/tagName/TagNameContainer';
import HeaderContainer from '../../container/header/HeaderContainer';

import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
import MainPostContainer from '../../container/mainPost/MainPostContainer';
import NavContainer from '../../container/nav/NavContainer';
import axios from 'axios';
import { searchTag, tagDateState } from '../../features/tag/tagSlice';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';

const TagSearchPage = ({ match }) => {
    console.log(match.params);
    const { tagName } = match.params;
    const dispatch = useAppDispatch();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.body.scrollTop);
    };
    const { oneTag } = useTypedSelector(tagDateState);

    useMemo(async () => {
        window.addEventListener('scroll', updateScroll);
        dispatch(searchTag({ tagName: tagName }));
    }, []);

    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'black' : 'white';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const theme = initTheme == 'white' ? 'white' : 'black';

    dispatch(toggleTheme({ themeType: theme }));
    const { themeData } = useTypedSelector(themeDataState);

    return (
        <>
            {themeData == 'white' ? (
                <S.TagSearch>
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <TagNameContainer tagName={'Tag/' + oneTag.name} tagTotal={'#' + oneTag.count + '개의 게시물'} />
                    <S.Article>
                        <MainPostContainer scrollPosition={scrollPosition} tagName={tagName} tagTotal={oneTag.count} />
                        <NavContainer />
                    </S.Article>
                </S.TagSearch>
            ) : (
                <S.TagSearch className="check">
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <TagNameContainer tagName={'Tag/' + oneTag.name} tagTotal={'#' + oneTag.count + '개의 게시물'} />
                    <S.Article className="check">
                        <MainPostContainer scrollPosition={scrollPosition} tagName={tagName} tagTotal={oneTag.count} />
                        <NavContainer />
                    </S.Article>
                </S.TagSearch>
            )}
        </>
    );
};
export default TagSearchPage;
