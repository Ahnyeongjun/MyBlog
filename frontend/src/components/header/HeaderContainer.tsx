import React, { useEffect, useState } from 'react';
import { checkIsLogin, logout } from '../../utils/authUtils';
import HamburgerMenu from './HambugerMenu/HamburgerMenu';
import * as S from './styles';
import Toggle from './Toggle/Toggle';
const HeaderContainer = (props: any) => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    const LogOutBtnClick = () => {
        logout();
        setIsLogin(false);
    };

    const onClick = () => {
        alert('아직 구현되지 않았습니다.');
    };
    return (
        <>
            {props.check ? (
                <S.Header className="check" scroll={props.scrollPosition}>
                    <S.Tech_Link href="/">HappyGuy's BLOG</S.Tech_Link>
                    <S.Tech_Category>
                        <S.Category_item>
                            <S.Category_a href="/"> Blog</S.Category_a>
                        </S.Category_item>
                        <S.Category_item onClick={onClick}> Post</S.Category_item>
                        {isLogin ? null : <S.Category_item onClick={onClick}>ReSume</S.Category_item>}
                        {isLogin ? null : <S.Category_item onClick={onClick}>Portfolio</S.Category_item>}
                        <S.Category_item>
                            <S.Category_a href="/write"> Write</S.Category_a>
                        </S.Category_item>
                        {isLogin ? <S.Category_item onClick={LogOutBtnClick}>LogOut</S.Category_item> : null}
                        <Toggle />
                    </S.Tech_Category>
                    <HamburgerMenu scrollPosition={props.scrollPosition} />
                </S.Header>
            ) : (
                <S.Header scroll={props.scrollPosition}>
                    <S.Tech_Link href="/">HappyGuy's BLOG</S.Tech_Link>
                    <S.Tech_Category>
                        <S.Category_item>
                            <S.Category_a href="/"> Blog</S.Category_a>
                        </S.Category_item>
                        <S.Category_item onClick={onClick}> Post</S.Category_item>
                        {isLogin ? null : <S.Category_item onClick={onClick}>ReSume</S.Category_item>}
                        {isLogin ? null : <S.Category_item onClick={onClick}>Portfolio</S.Category_item>}
                        {isLogin ? (
                            <S.Category_item>
                                <S.Category_a href="/write"> Write</S.Category_a>
                            </S.Category_item>
                        ) : null}
                        {isLogin ? <S.Category_item onClick={LogOutBtnClick}>LogOut</S.Category_item> : null}
                        <Toggle />
                    </S.Tech_Category>
                    <HamburgerMenu scrollPosition={props.scrollPosition} />
                </S.Header>
            )}
        </>
    );
};
export default HeaderContainer;
