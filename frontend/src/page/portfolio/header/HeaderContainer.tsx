import React, { useEffect, useState } from 'react';
import * as S from './styles';

import HamburgerMenu from '../HambugerMenu/HamburgerMenu';

const HeaderContainer = (props: any) => {
    const onClickforHome = () => {
        window.scrollTo({
            top: 0,
        });
    };
    const onClickforAbout = () => {
        window.scrollTo({
            top: 900,
        });
    };
    const onClickforSkill = () => {
        window.scrollTo({
            top: 1900,
        });
    };
    const onClickforProject = () => {
        window.scrollTo({
            top: 3100,
        });
    };
    return (
        <>
            <S.Header>
                <S.Blog_Link>HappyGuy's PortFolio</S.Blog_Link>
                <S.Blog_Category>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforHome}> Home</S.Category_a>
                    </S.Category_item>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforAbout}> About</S.Category_a>
                    </S.Category_item>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforSkill}> Skill</S.Category_a>
                    </S.Category_item>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforProject}> Project</S.Category_a>
                    </S.Category_item>
                </S.Blog_Category>
                <HamburgerMenu scrollPosition={props.scrollPosition} />
            </S.Header>
        </>
    );
};
export default HeaderContainer;
