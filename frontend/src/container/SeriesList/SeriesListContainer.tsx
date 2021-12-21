import React from 'react';
import { useAppDispatch, useTypedSelector } from '../../module/store';
import * as S from './styles';
import { seriesDateState } from '../../features/series/seriesSlice';
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
    if (seriesList)
        for (let i = 0; i < seriesList.length; i++) {
            array.push(
                <S.PostItemWpapper
                    onClick={() => {
                        location.href = `/post/${seriesList[i].searchUrl}`;
                    }}
                >
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
            {themeData == 'white' ? (
                <S.PostList>
                    <>{array}</>
                </S.PostList>
            ) : (
                <S.PostList className="check">
                    <>{array}</>
                </S.PostList>
            )}
        </S.Series>
    );
};

export default SeriesListContainer;
