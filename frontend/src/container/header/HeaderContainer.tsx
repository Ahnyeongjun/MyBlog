import React, { useEffect, useState } from 'react';
import * as S from './styles';

import HamburgerMenu from '../../components/HambugerMenu/HamburgerMenu';
import Toggle from '../../components/Toggle/Toggle';

import { useTypedSelector } from '../../module/store';
import { themeDataState } from '../../features/theme/themeSlice';
import { checkIsLogin, logout } from '../../utils/authUtils';

const HeaderContainer = (props: any) => {
    const { themeData } = useTypedSelector(themeDataState);
    //로그인 여부
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        async function checkToken() {
            setIsLogin(await checkIsLogin());
        }
        const token = localStorage.getItem('accessToken');
        if (token) {
            checkToken();
        } else {
            setIsLogin(false);
        }
    }, []);

    const LogOutOnClick = () => {
        logout();
        setIsLogin(false);
    };

    const incompleteOnClick = () => {
        alert('아직 구현되지 않았습니다.');
    };

    return (
        <>
            {themeData != 'white' ? (
                //다크모드
                <S.Header className="check" scroll={props.scrollPosition}>
                    <S.Blog_Link href="/">HappyGuy's BLOG</S.Blog_Link>
                    <S.Blog_Category>
                        <S.Category_item>
                            <S.Category_a href="/"> Blog</S.Category_a>
                        </S.Category_item>
                        <S.Category_item>
                            <S.Category_a href="/post"> Post</S.Category_a>
                        </S.Category_item>
                        {isLogin ? (
                            <>
                                <S.Category_item>
                                    <S.Category_a href="/write"> Write</S.Category_a>
                                </S.Category_item>
                                <S.Category_item onClick={LogOutOnClick}>LogOut</S.Category_item>
                            </>
                        ) : (
                            <>
                                <S.Category_item>
                                    <S.Category_a href="/resume"> Resume</S.Category_a>
                                </S.Category_item>                                <S.Category_item>
                                    <S.Category_a href="https://portfolio.youngjun.site/"> Portfolio</S.Category_a>
                                </S.Category_item>
                            </>
                        )}

                        <Toggle />
                    </S.Blog_Category>
                    <HamburgerMenu scrollPosition={props.scrollPosition} isLogin={isLogin} />
                </S.Header>
            ) : (
                <S.Header scroll={props.scrollPosition}>
                    <S.Blog_Link href="/">HappyGuy's BLOG</S.Blog_Link>
                    <S.Blog_Category>
                        <S.Category_item>
                            <S.Category_a href="/"> Blog</S.Category_a>
                        </S.Category_item>
                        <S.Category_item>
                            <S.Category_a href="/post"> Post</S.Category_a>
                        </S.Category_item>
                        {isLogin ? (
                            <>
                                <S.Category_item>
                                    <S.Category_a href="/write"> Write</S.Category_a>
                                </S.Category_item>
                                <S.Category_item onClick={LogOutOnClick}>LogOut</S.Category_item>
                            </>
                        ) : (
                            <>
                                <S.Category_item>
                                    <S.Category_a href="/resume"> Resume</S.Category_a>
                                </S.Category_item>    
                                <S.Category_item>
                                    <S.Category_a href="https://portfolio.youngjun.site/"> Portfolio</S.Category_a>
                                </S.Category_item>
                            </>
                        )}

                        <Toggle />
                    </S.Blog_Category>
                    <HamburgerMenu scrollPosition={props.scrollPosition} isLogin={isLogin} />
                </S.Header>
            )}
        </>
    );
};
export default HeaderContainer;
