import React, { useCallback, useRef, useState } from 'react';
import Accordion from './accordion/Accordion';
import Tag from './tag/Tag';
import * as S from './styles';
const NavContainer = (props: any) => {
    return (
        <>
            {props.check ? (
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
