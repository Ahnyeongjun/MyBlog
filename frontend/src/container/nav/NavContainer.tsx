import React from 'react';
import { themeDataState } from '../../features/theme/themeSlice';
import { useTypedSelector } from '../../module/store';
import Accordion from '../../components/accordion/Accordion';
import Tag from '../../components/nav_tag/Tag';
import * as S from './styles';
const NavContainer = () => {
    const { themeData } = useTypedSelector(themeDataState);
    console.log(themeData);
    return (
        <>
            {themeData != 'white' ? (
                <S.NavWrapper className="check">
                    <S.NavItemWrapper>
                        <S.NavTitle className="check">Project</S.NavTitle>
                        <Accordion check="true" />
                        <Accordion check="true" />
                    </S.NavItemWrapper>
                    <S.NavItemWrapper>
                        <S.TagTitle className="check">Tag</S.TagTitle>
                        <Tag check="true" />
                    </S.NavItemWrapper>
                </S.NavWrapper>
            ) : (
                <S.NavWrapper>
                    <S.NavItemWrapper>
                        <S.NavTitle>Project</S.NavTitle>
                        <Accordion />
                        <Accordion />
                    </S.NavItemWrapper>
                    <S.NavItemWrapper>
                        <S.TagTitle>Tag</S.TagTitle>
                        <Tag />
                    </S.NavItemWrapper>
                </S.NavWrapper>
            )}
        </>
    );
};

export default NavContainer;
