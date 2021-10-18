import React from 'react';
import * as S from './styles';

import HamburgerMenu from '../HambugerMenu/HamburgerMenu';

const HeaderContainer = (props: any) => {
    const onClickforHome = () => {
        window.scrollTo({
            top: 0,
        });
    };
    const onClickforAbout = () => {
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 900,
              })
            : window.scrollTo({
                  top: 600,
              });
    };
    const onClickforSkill = () => {
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 1800,
              })
            : window.scrollTo({
                  top: 1500,
              });
    };
    const onClickforProject = () => {
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 3000,
              })
            : window.scrollTo({
                  top: 2700,
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
