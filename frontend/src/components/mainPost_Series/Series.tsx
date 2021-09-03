import React, { useMemo, useState } from 'react';

import { useAppDispatch, useTypedSelector } from '../../module/store';
const Series = () => {
    const dispatch = useAppDispatch();

    // useMemo(() => {
    //     dispatch(getPagenationPost({ page: 1, pageSize: 3, type: 'main' }));
    // }, []);

    // const { postData } = useTypedSelector(postListDateState);
    return (
        <>
            <div>개발중</div>
            {/* {postData.map((e) => (
                <S.MainPostItemWrapper>
                    <S.MainPostImg src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                    <S.ContentWrapper>
                        <S.FeautredTitleWrapper>
                            <S.FeautredTitle>{e.title}</S.FeautredTitle>
                        </S.FeautredTitleWrapper>
                        <S.FeautredContent>{e.text}</S.FeautredContent>
                    </S.ContentWrapper>
                </S.MainPostItemWrapper>
            ))} */}
        </>
    );
};

export default Series;
