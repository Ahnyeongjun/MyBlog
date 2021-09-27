import HeaderContainer from '../../container/header/HeaderContainer';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOnePost, postDateState } from '../../features/post/postSlice';
import { useTypedSelector } from '../../module/store';
import * as S from './styles';
import { themeDataState, toggleTheme } from '../../features/theme/themeSlice';
import FooterContainer from '../../container/footer/FooterContainer';
import './style.css';
import 'react-quill/dist/quill.snow.css';
const date = new Date();
const PostDetailPage = ({ match }) => {
    console.log(match.params);
    const { searchUrl } = match.params;
    console.log(searchUrl);
    const dispatch = useDispatch();
    useMemo(() => {
        dispatch(getOnePost({ searchUrl: searchUrl }));
        document.title = `${searchUrl} | YoungJun`;
    }, []);
    const { postData } = useTypedSelector(postDateState);

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
                <>
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
                                          <S.TagItemWrapper
                                              onClick={() => {
                                                  location.href = `/tag/${e.name}`;
                                              }}
                                          >
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
                    {/*<S.MyInformationWrapper>
                        <MyInformation />
                    </S.MyInformationWrapper>
                    <FooterContainer />
                    */}
                </>
            ) : (
                <>
                    <S.Post className="check">
                        <HeaderContainer scrollPosition={0} />
                        <S.HeadWrapper>
                            <S.Title>{postData.title}</S.Title>
                            <S.infoWrapper>
                                <S.Writer>{postData.writer}</S.Writer>-<S.createdAt>{postData.createdAt}</S.createdAt>
                            </S.infoWrapper>
                            <S.TagWRapper>
                                {postData.tag
                                    ? postData.tag.map((e) => (
                                          <S.TagItemWrapper
                                              onClick={() => {
                                                  location.href = `/tag/${e.name}`;
                                              }}
                                          >
                                              <S.TagItem className="check">{e.name}</S.TagItem>
                                          </S.TagItemWrapper>
                                      ))
                                    : null}
                            </S.TagWRapper>
                        </S.HeadWrapper>
                        <S.PostWrapper>
                            <S.PostBody dangerouslySetInnerHTML={{ __html: postData.content }}></S.PostBody>
                        </S.PostWrapper>

                        {/*  <S.MyInformationWrapper className="check"> 
             <MyInformation check={true} />
                        </S.MyInformationWrapper>*/}
                    </S.Post>
                    <FooterContainer />
                </>
            )}{' '}
        </>
    );
};
export default PostDetailPage;
