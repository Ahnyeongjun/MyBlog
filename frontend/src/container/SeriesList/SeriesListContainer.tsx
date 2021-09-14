import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
import { getPagenationMainPostList, postListDateState, searchTagOnPageList } from '../../features/postList/postListSlice';
import { getAllSeriesList, seriesDateState } from '../../features/series/seriesSlice';
import { themeDataState } from '../../features/theme/themeSlice';
import { DefaultImage } from '../../asset';

const SeriesListContainer = () => {
    const dispatch = useAppDispatch();

    const onClick = (searchUrl: string) => {
        location.href = `/post/${searchUrl}`;
    };
    const { themeData } = useTypedSelector(themeDataState);

    const { seriesList } = useTypedSelector(seriesDateState);

    const array = [];

    for (let i = 0; i < seriesList.length; i++) {
        array.push(
            <S.PostItemWpapper>
                <S.PostTitle>
                    {i + 1}. {seriesList[i].title}
                </S.PostTitle>
                <S.PostContentWrapper>
                    <S.Img src={seriesList[i].mainImageURL ? seriesList[i].mainImageURL : DefaultImage} />
                    <S.PostContent>
                        <S.Text> {seriesList[i].mainContent} </S.Text>
                        <S.CreatedAt>{seriesList[i].createdAt}</S.CreatedAt>
                    </S.PostContent>
                </S.PostContentWrapper>
            </S.PostItemWpapper>
        );
    }
    return (
        <S.Series>
            {themeData != 'white' ? (
                <>
                    {/* {seriesList &&
                        seriesList.map((e) => (
                            <S.MainPostItemWrapper className="check" onClick={() => onClick(e.searchUrl)}>
                                {e.mainImageURL ? <S.MainPostImg src={e.mainImageURL} /> : null}
                                <S.ContentWrapper>
                                    <S.FeautredTitle>{e.title}</S.FeautredTitle>
                                    <S.FeautredContent>{e.mainContent}</S.FeautredContent>
                                    <S.createdAt>{e.createdAt}</S.createdAt>
                                </S.ContentWrapper>
                            </S.MainPostItemWrapper>
                        ))} */}
                </>
            ) : (
                <S.PostList>
                    <>{array}</>
                </S.PostList>
            )}
        </S.Series>
    );
};

export default SeriesListContainer;
