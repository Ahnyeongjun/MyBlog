import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import HeaderContainer from '../../container/header/HeaderContainer';

import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
import MainPostContainer from '../../container/mainPost/MainPostContainer';
import NavContainer from '../../container/nav/NavContainer';
import axios from 'axios';
import { searchTag, tagDateState } from '../../features/tag/tagSlice';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import FooterContainer from '../../container/footer/FooterContainer';
import { getAllSeriesList, seriesDateState } from '../../features/series/seriesSlice';
import SeriesListContainer from '../../container/SeriesList/SeriesListContainer';
import NameIntro from '../../components/NameIntro/NameIntro';

const seriesSearchPage = ({ match }) => {
    console.log(match.params);
    const { seriesName } = match.params;
    const dispatch = useAppDispatch();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.body.scrollTop);
    };

    useMemo(async () => {
        window.addEventListener('scroll', updateScroll);
        document.title = `${seriesName} | YoungJun`;
        dispatch(getAllSeriesList({ seriesName: seriesName }));
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
                    <NameIntro tagName={'Series/' + seriesName} />
                    <SeriesListContainer />
                    <FooterContainer />
                </S.TagSearch>
            ) : (
                <S.TagSearch className="check">
                    <HeaderContainer scrollPosition={scrollPosition} />
                    <NameIntro tagName={'Series/' + seriesName} />
                    <SeriesListContainer />
                    <FooterContainer />
                </S.TagSearch>
            )}
        </>
    );
};
export default seriesSearchPage;
