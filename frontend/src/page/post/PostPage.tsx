import HeaderContainer from '../../container/header/HeaderContainer';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOnePost, postDateState } from '../../features/post/postSlice';
import { useTypedSelector } from '../../module/store';
import * as S from './styles';

const date = new Date();
const PostPage = ({ match }) => {
    console.log(match.params);
    const { searchUrl } = match.params;

    const dispatch = useDispatch();
    useMemo(() => {
        dispatch(getOnePost({ searchUrl: searchUrl }));
    }, []);
    const { postData } = useTypedSelector(postDateState);

    return (
        <S.Post>
            <HeaderContainer scrollPosition={0} />
            <S.HeadWrapper>
                <S.Title>{postData.title}</S.Title>
                <S.infoWrapper>
                    <S.Writer>{postData.writer}</S.Writer>-<S.createdAt>{postData.createdAt}</S.createdAt>
                </S.infoWrapper>
                <S.TagWRapper>
                    {postData.tag
                        ? postData.tag.map((e) => (
                              <S.TagItemWrapper>
                                  <S.TagItem>{e.name}</S.TagItem>
                              </S.TagItemWrapper>
                          ))
                        : null}
                </S.TagWRapper>
            </S.HeadWrapper>
            <S.PostWrapper>
                <S.PostBody dangerouslySetInnerHTML={{ __html: postData.content }}></S.PostBody>
            </S.PostWrapper>
        </S.Post>
    );
};
export default PostPage;
