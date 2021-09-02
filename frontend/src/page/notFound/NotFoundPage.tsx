import HeaderContainer from '../../container/header/HeaderContainer';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';

const NotFoundPage = () => {
    const { themeData } = useTypedSelector(themeDataState);

    const dispatch = useAppDispatch();

    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'black' : 'white';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
        initTheme = localSettingTheme;
    }

    const theme = initTheme == 'white' ? 'white' : 'black';

    dispatch(toggleTheme({ themeType: theme }));

    return (
        <>
            {themeData == 'white' ? (
                <S.NotFoudWrapper>
                    <S.HeaderWrapper>
                        <HeaderContainer scroll={0} />
                    </S.HeaderWrapper>
                    <S.NotFound>
                        <S.ErrorWrap>
                            <S.TopText>error</S.TopText>
                            <S.MainText>404</S.MainText>
                            <S.BorderText>Page Not Found</S.BorderText>
                            <S.SubText>This page you're looking for doesn't exist or an other error occured.</S.SubText>
                        </S.ErrorWrap>
                        <S.RedirectBtn to="/" as={Link}>
                            Go Home
                        </S.RedirectBtn>
                    </S.NotFound>
                </S.NotFoudWrapper>
            ) : (
                <S.NotFoudWrapper>
                    <S.HeaderWrapper>
                        <HeaderContainer scroll={0} check={true} />
                    </S.HeaderWrapper>
                    <S.NotFound className="check">
                        <S.ErrorWrap>
                            <S.TopText className="check">error</S.TopText>
                            <S.MainText className="check">404</S.MainText>
                            <S.BorderText className="check">Page Not Found</S.BorderText>
                            <S.SubText className="check">This page you're looking for doesn't exist or an other error occured.</S.SubText>
                        </S.ErrorWrap>
                        <S.RedirectBtn to="/" as={Link} className="check">
                            Go Home
                        </S.RedirectBtn>
                    </S.NotFound>
                </S.NotFoudWrapper>
            )}
        </>
    );
};

export default NotFoundPage;
