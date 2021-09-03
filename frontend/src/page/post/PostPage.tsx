import React, { useMemo, useState } from 'react';
import TagNameContainer from '../../container/tagName/TagNameContainer';
import HeaderContainer from '../../container/header/HeaderContainer';

import * as S from './styles';
import MainPostContainer from '../../container/mainPost/MainPostContainer';
import NavContainer from '../../container/nav/NavContainer';
import axios from 'axios';

const PostPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.body.scrollTop);
    };

    useMemo(async () => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    return (
        <>
            <S.TagSearch>
                <HeaderContainer scrollPosition={scrollPosition} />
                <TagNameContainer tagName={'Post'} />
                <S.Article>
                    <MainPostContainer scrollPosition={scrollPosition} />
                    <NavContainer />
                </S.Article>
            </S.TagSearch>
        </>
    );
};
export default PostPage;
