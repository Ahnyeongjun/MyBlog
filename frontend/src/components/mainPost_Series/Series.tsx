import React, { useMemo, useState } from 'react';
import { getAllSeries, seriesDateState } from '../../features/series/seriesSlice';
import * as S from './style';
import { useAppDispatch, useTypedSelector } from '../../module/store';
const Series = () => {
    const dispatch = useAppDispatch();

    useMemo(() => {
        dispatch(getAllSeries());
    }, []);

    const { series } = useTypedSelector(seriesDateState);

    console.log(series);
    return (
        <>
            <S.Series>
                {series &&
                    series.map((e) => (
                        <S.SeriesItem>
                            {e.post &&
                                (e.post[0].mainImageURL ? (
                                    <S.SeriesImage src={e.post[0].mainImageURL} />
                                ) : (
                                    <S.SeriesImage src="../../../public/favpng_information.svg" />
                                ))}
                            <S.SeriesTitle>{e.name}</S.SeriesTitle>
                            {e.post ? (
                                <S.SeriesContent>
                                    {e.post.length}개의 포스트 - 마지막 생성 날짜: {e.post[0].createdAt}
                                </S.SeriesContent>
                            ) : (
                                <S.SeriesContent>버그 버그 버그 버그</S.SeriesContent>
                            )}
                        </S.SeriesItem>
                    ))}
            </S.Series>
        </>
    );
};

export default Series;
